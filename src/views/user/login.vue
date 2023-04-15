<template>

<div class="bg-login">
    <v-container fill-height fluid>
        <div class="d-flex align-center justify-center" style="height: 100vh">
            <v-card class="mx-auto" style="background-color:transparent;">
                <v-container>
                    <h2>欢迎使用<br>对象存储平台</h2>
                    <v-sheet width="400" class="mx-auto" style="background-color:transparent; margin-top: 20px;">
                        <v-form fast-fail @submit.prevent="login" >
                            <v-text-field
                                v-model="username"
                                label="请输入公网/局域网IP"
                                color="primary"
                                variant="outlined"
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                label="请输入手机号"
                                color="primary"
                                variant="outlined"
                            ></v-text-field>
                            <v-text-field
                                v-model="verifycode"
                                label="请输入验证码"
                                color="primary"
                                variant="outlined"
                            >
                                <template v-slot:append-inner>
                                    <v-btn size="large" class="mt-n2" variant="plain" color="primary">获取验证码</v-btn>
                                </template>
                            </v-text-field>
                            <v-btn type="submit" size="large" color="primary" block class="mt-2" @click="onLogin
                            ">登录</v-btn>
                        </v-form>
                        <div class="mt-2">
                            <v-btn variant="plain">密码登录</v-btn>
                            <v-btn variant="plain" style="float:right;">立即注册</v-btn>
                        </div>
                    </v-sheet>
                </v-container>
            </v-card>
        </div>
    </v-container>
</div>

</template>

<style>

.bg-login {
    min-height: 100vh;
    background-image: url('@/svg/background.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    /* position: relative; */
}
</style>

<script>
export default {
    name: 'loginView',
    data: () => ({
        username: '',
        password: '',
        verifycode: ''
    }),
    methods: {
        onLogin(username, password, verifycode){
            console.log(username, password, verifycode)
        },
    }
}
</script>