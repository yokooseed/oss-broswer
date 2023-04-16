<template>
<div class="version-control">
    <v-row>
        <v-col cols="1">
            <v-label class="pa-2 ma-2">默认下载路径</v-label>
        </v-col>
        <v-col cols="auto">
            <v-label class="pa-2 ma-2">/storage/emulated/Download</v-label>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="2">
            <v-label class="pa-2 ma-2">允许访问存储空间</v-label>
        </v-col>
        <v-col cols="auto">
            <v-switch
                v-model="allowStorage"
                hide-details="true"
                inset
                color="primary"
            ></v-switch>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="2">
            <v-label class="pa-2 ma-2">允许访问相机</v-label>
        </v-col>
        <v-col cols="auto">
            <v-switch
                v-model="allowCamera"
                hide-details="true"
                inset
                color="primary"
            ></v-switch>
        </v-col>
    </v-row>
    <h1 style="margin-bottom: 20px;">个人设置</h1>
    <!-- <v-row>
        <v-col cols="1">
            <v-label class="pa-2 ma-2">公网/局域网IP</v-label>
        </v-col>
        <v-col cols="auto">
            <v-label class="pa-2 ma-2">255.255.255.255</v-label>
        </v-col>
    </v-row> -->
    <v-row>
        <v-col cols="1">
            <v-label class="pa-2 ma-2">邮箱</v-label>
        </v-col>
        <v-col cols="auto">
            <v-label class="pa-2 ma-2">{{ global.user.email }}</v-label>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="1">
            <v-label class="pa-2 ma-2">用户名</v-label>
        </v-col>
        <v-col cols="auto">
            <v-label class="pa-2 ma-2">{{ global.user.username }}</v-label>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="1">
            <v-label class="pa-2 ma-2">密码</v-label>
        </v-col>
        <v-col cols="auto">
            <div class="pa-2">
                <v-btn style="margin-right: 20px;" variant="tonal" color="primary">修改密码</v-btn>
                <v-btn variant="tonal" color="primary" @click="logout">退出登录</v-btn>
            </div>
        </v-col>
    </v-row>
</div>
</template>

<style>
.version-control {
    background-color: transparent;
}
</style>

<script>
export default {
    data: () => ({
        allowStorage: false,
        allowCamera: false,
    }),
    name: 'settingView',
    methods: {
        logout() {
            this.r.logout().then(res => {
                console.log(res)
                this.global.logout()
                this.snackbar.show("退出成功, 返回首页")
                this.jumpView(this.path.overview, "概览")
            })
        }
    }
}
</script>