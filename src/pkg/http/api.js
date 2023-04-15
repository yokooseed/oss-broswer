const host = "127.0.0.1:8080/"

export default {
    user: {
        // 登录
        login: "user/login",
        // 登出
        logout: "user/logout",
        // 注册
        register: "user/logon",
        // 更新密码
        updatePassword: "user/update/Password",
        // 更新名称
        updateNmae: "user/update/name",
        // 发送邮件
        sendEmail: "user/sendMail",
        // 判断一个用户是否在bucket内
        judge: "user/judge",
    },
    bucket: {
        // 添加桶
        add: "bucket/add",
        // 更新桶对外权限
        updateAuth: "bucket/update/authority",
        // 更新桶名称
        updateName: "bucket/update/name",
        // 获取我的桶列表
        getList: "bucket/myBuckets",
        // 删除桶
        delete: "bucket/delete",
        // 获取被删除的桶列表
        getDeletedList: "bucket/delBuckets",
        // 恢复被删除的桶
        recovery: "bucket/recover",
        // 添加桶的用户
        addUser: "bucket/user/add",
        // 获取桶的用户列表
        getUserList: "bucket/user/list",
        // 更改用户的桶权限
        updateUserAuth: "bucket/user/setAuth",
        // 获取用户的桶权限
        getUserAuth: "bucket/user/getAuth",
    },
    file: {
        // 分片上传准备
        prepareUpload: "put/shardPreparation",
        // 上传分片
        upload: "put/uploadShard",
        // 分片上传检查
        uploadCheck: "put/checkShard",
        // 上传单个文件
        uploadSingle: "put/uploadSimple",
        // 获取文件
        get: "get/getFile",
        // 获取某个桶的文件列表
        getList: "get/getBucket",
        // 删除文件
        delete: "delete/delFile",
        // 恢复被删除的文件
        recovery: "delete/recoverFile",
        // 冷备份
        coldBackup: "put/coldStore",
        // 冷备份恢复
        codeBackupRecovery: "put/coldGet",
    }
}