import http from './http.js'
import api from './api.js'


export default {
    // 用户操作
    login(email = '', password = '') {
        return http.post(api.user.login, { email, password })
    },
    logout() {
        return http.post(api.user.logout)
    },
    register(email = '', password = '', code = '') {
        return http.post(api.user.register, { email, password, code })
    },
    updatePassword(oldPassword = '', newPassword = '') {
        return http.post(api.user.updatePassword, { oldPassword, newPassword })
    },
    updateName(newName = '') {
        return http.post(api.user.updateName, { newName })
    },
    sendEmail(email = '') {
        return http.post(api.user.sendEmail, { email })
    },
    judge(bucketId = '', email = '') {
        return http.get(api.user.judge, { bucketId, email })
    },

    // 桶操作
    // authority: 1: read-only 2: read-write 3: private
    addBucket(name = '', authority = 0) {
        return http.post(api.bucket.add, { name, authority })
    },
    updateBucketAuth(bucketId = '', authority = 0) {
        return http.post(api.bucket.updateAuth, { bucketId, authority })
    },
    updateBucketName(bucketId = '', newName = '') {
        return http.post(api.bucket.updateName, { bucketId, newName })
    },
    getBucketList() {
        return http.get(api.bucket.getList)
    },
    deleteBucket(bucketId = '') {
        return http.post(api.bucket.delete, { bucketId })
    },
    getDeletedBucketList() {
        return http.get(api.bucket.getDeletedList)
    },
    recoverBucket(bucketId = '') {
        return http.post(api.bucket.recovery, { bucketId })
    },
    addBucketUser(bucketId = '', email = '', type = 0) {
        return http.post(api.bucket.addUser, { bucketId, email, type })
    },
    getBucketUserList(bucketId = '') {
        return http.get(api.bucket.getUserList, { bucketId })
    },
    updateBucketUserAuth(bucketId = '', email = '', type = 0) {
        return http.post(api.bucket.updateUserAuth, { bucketId, email, type })
    },
    getBucketUserAuth(bucketId = '') {
        return http.get(api.bucket.getUserAuth, { bucketId })
    },

    // 文件操作
    prepareUpload(originMd5 = '', fileName = '', shardNum = '', shardSize = '', bucketId = '', isZip = '') {
        return http.post(api.file.prepareUpload, { originMd5, fileName, shardNum, shardSize, bucketId, isZip })
    },
    uploadShard(file = '', ownMd5 = '', no = '', totalMd5 = '', key = '') {
        return http.post(api.file.upload, { file, ownMd5, no, totalMd5, key })
    },
    uploadCheck(md5 = '', key = '') {
        return http.post(api.file.uploadCheck, { md5, key })
    },
    uploadSingle(file = '', originMd5 = '', bucketId = '', isZip = '') {
        return http.post(api.file.uploadSingle, { file, originMd5, bucketId, isZip })
    },
    getFile(bucketId = '', fileName = '') {
        return http.get(api.file.get, { bucketId, fileName })
    },
    getBucketFileList(bucketId = '') {
        return http.get(api.file.getList + "/" + bucketId)
    },
    deleteFile(bucketId = '', fileName = '', isForever = '') {
        return http.get(api.file.delete, { bucketId, fileName, isForever })
    },
    recoverFile(bucketId = '', fileName = '') {
        return http.get(api.file.recovery, { bucketId, fileName })
    },
    coldBackup(bucketId = '', fileName = '') {
        return http.get(api.file.coldBackup, { bucketId, fileName })
    },
    coldBackupRecovery(bucketId = '', fileName = '') {
        return http.get(api.file.coldBackupRecovery, { bucketId, fileName })
    }
}