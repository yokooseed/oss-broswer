import { defineStore } from 'pinia';
import axios from 'axios'
import spark from 'spark-md5'

export const tranferStore = defineStore('transfer', {
    state: () => ({
        files: [],
        currentFile: null,
        progress: 0,
    }),
    actions: {
        appendFile(file) {
            this.files.push(file)
        },
        calmd5(file, callback) {
            const fileReader = new FileReader()
            fileReader.readAsBinaryString(file);
            fileReader.onload = e => {
                const md5 = spark.hashBinary(e.target.result);
                callback(md5)
            }
        },
        async startUpload(file, bucketID) {
            this.currentFile = file
            this.progress = 0
            try {
                await this.uploadFile(file, bucketID)
                this.completeUpload()
            } catch (error) {
                this.calcenUpload()
                throw error
            }
        },
        async uploadFile(file, bucketID) {
            let p = new Promise((resolve, reject) => {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('bucketId', bucketID)
                formData.append('isZip', 0)

                this.calmd5(file, (md5) => {
                    console.log(String(("0x" + md5).toString(10)))
                    formData.append('originMd5', ("0x" + md5).toString(10))
                    const config = {
                        withCredentials: true,  // 允许携带cookie
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Credentials': 'true',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                            'token': localStorage.getItem('token'),
                        },
                        onUploadProgress: (progressEvent) => {
                            const precentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                            this.updateProgress(precentCompleted)
                        }
                    }
                    axios
                        .post('http://47.113.216.236:9739/put/uploadSimple', formData, config)
                        .then((res) => resolve(res))
                        .catch((error) => reject(error))
                })
            })
            return p
        },
        updateProgress(progress) {
            this.progress = progress
        },
        completeUpload() {
            this.currentFile = null
            this.progress = 100
        },
        calcenUpload() {
            this.currentFile = null
            this.progress = 0
        }
    }
})