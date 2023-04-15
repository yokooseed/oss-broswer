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

        <!-- <v-spacer></v-spacer> -->
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
                    v-for="(item, i) in menuItems"
                    :key="i"
                    @click="onClick(item)"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn variant="text" icon="mdi-swap-vertical" style="margin-right: 20px;"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical" style="margin-right: 20px;"></v-btn>

        <v-btn variant="outlined" color="primary" style="margin-right: 20px;" @click="toRegister">注册</v-btn>
        <v-btn variant="elevated" color="primary" style="margin-right: 20px;" @click="toLogin">登录</v-btn>
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
            { title: '创建Bucket' },
            { title: '上传文件' },
        ]
    }),
    methods: {
        toRegister() {
            this.$router.push('/register')
        },
        toLogin() {
            this.$router.push('/login')
        },
    }
}
</script>