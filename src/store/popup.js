import { defineStore } from "pinia";

export const popupStore = defineStore('popup', {
    state: () => ({
        data: {
            show: false,
            title: "null",
            component: "",
        },
        items: [
            { title: '创建Bucket', name: 'bucket-create' },
            { title: '上传文件', name: 'file-upload' },
            { title: 'Bucket详情', name: 'bucket-detail' },
            { title: '添加用户权限', name: 'add-user-permission' },
            { title: '传输列表', name: 'transfer-list' },
            { title: '更新Bucket权限', name: 'update-permission' },
            { title: '文件详情', name: 'file-detail' },
        ],
        params: {},
    }),
    actions: {
        close(){
            this.data.show = false
        },
        load(title, name) {
            this.data.title = title
            this.data.component = name
            this.data.show = true
        },
        loadIndex(index) {
            this.data.title = this.items[index].title
            this.data.component = this.items[index].name
            this.data.show = true
        },
        update(data){
            this.data = data
        },
        setparams(params){
            this.params = params
        }
    }
})