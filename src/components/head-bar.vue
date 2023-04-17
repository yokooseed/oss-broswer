<template>
<v-card flat v-show="global.isShowBar">
    <v-toolbar class="head-bar">
        <v-text-field
            style="margin-left: 20px; margin-right: 20px;"
            density="compact"
            variant="solo"
            label="搜索"
            prepend-inner-icon="mdi-magnify"
            single-line
            hide-details
        ></v-text-field>

        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                    v-bind="props"
                    variant="elevated"
                    color="primary"
                    prepend-icon="mdi-plus-circle-outline"
                    style="margin-left: 20px; margin-right: 20px;"
                >创建/上传</v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    @click="toPopup(item.title, item.name)"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn variant="elevated" prepend-icon="mdi-swap-vertical" style="margin-right: 20px;" @click="showTransferList">传输列表</v-btn>
        <!-- TODO: 下面这个不知道是做什么的 -->
        <!-- <v-btn variant="text" icon="mdi-dots-vertical" style="margin-right: 20px;"></v-btn> -->

        <div v-if="global.islogin == true">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                        variant="text"
                        color="primary"
                        style="margin-right: 20px;"
                    >{{ global.user.email }}</v-btn>
                </template>
                <v-list>
                    <v-list-item><v-btn variant="outlined" color="primary" style="margin-right: 20px;" @click="logout" block>退出登录</v-btn></v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div v-else>
            <v-btn variant="outlined" color="primary" style="margin-right: 20px;" @click="toRegister">注册</v-btn>
            <v-btn variant="elevated" color="primary" style="margin-right: 20px;" @click="toLogin">登录</v-btn>
        </div>
    </v-toolbar>
</v-card>
</template>

<style>

.head-bar {
    background-color: rgb(255, 255, 255);
}
</style>

<script>
export default {
    data: () => ({
        menuItems: [
            { title: '创建Bucket', name: 'bucket-create' },
            { title: '上传文件', name: 'file-upload' },
        ],
    }),
    created() {
        // this.menuItems = this.popup.items // 后期改掉，只剩下创建/上传
    },
    methods: {
        toRegister() {
            if(this.global.islogin == true) {
                this.dialog.show("访问页面失败", "你已经登录过了, 如需注册账号请先退出登录")
                return
            }
            this.$router.push(this.path.register)
        },
        toLogin() {
            if(this.global.islogin == true) {
                this.dialog.show("访问页面失败", "你已经登录过了, 如需切换账号请先退出登录")
                return
            }
            this.$router.push(this.path.login)
        },
        logout() {
            this.r.logout().then(res => {
                console.log(res)
                this.global.logout()
                this.snackbar.show("退出成功, 返回首页")
                this.jumpView(this.path.overview, "概览")
            })
        },
        toPopup(title, name) {
            console.log(title, name)
            this.popup.load(title, name)
        },
        showTransferList() {
            this.popup.loadIndex(4)
        }
    }
}
</script>