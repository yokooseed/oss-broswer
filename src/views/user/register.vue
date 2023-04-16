<template>

<div class="bg-login">
    <v-container fill-height fluid>
        <div class="d-flex align-center justify-center" style="height: 100vh">
            <v-card class="mx-auto" style="background-color:transparent;">
                <v-container>
                    <h2>欢迎使用<br>对象存储平台</h2>
                    <v-sheet width="400" class="mx-auto" style="background-color:transparent; margin-top: 20px;">
                        <v-form fast-fail>
                            <v-text-field
                                v-model="email"
                                label="请输入邮箱"
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
                                    <v-btn size="large" class="mt-n2" variant="plain" color="primary" @click="sendmail" :loading="loading[0]">
                                        <template v-slot:loader>
                                            <v-progress-linear indeterminate></v-progress-linear>
                                        </template>
                                        获取验证码</v-btn>
                                </template>
                            </v-text-field>
                            <v-text-field
                                v-model="password"
                                type="password"
                                label="请输入密码"
                                color="primary"
                                variant="outlined"
                            ></v-text-field>
                            <v-btn
                                size="large"
                                color="primary"
                                block
                                class="mt-2"
                                :loading="loading[1]"
                                @click="register"
                            >
                                <template v-slot:loader>
                                    <v-progress-linear indeterminate></v-progress-linear>
                                </template>
                                注册
                            </v-btn>
                        </v-form>
                        <div class="mt-2">
                            <v-btn variant="plain" @click="toLogin">已有账号?点击登录</v-btn>
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
        email: '',
        verifycode: '',
        password: '',
        loading: [false, false],
    }),
    methods: {
        sendmail() {
            this.loading[0] = true;
            setTimeout(() => (this.loading[0] = false), 6000)
            this.r.sendEmail(this.email)
        },
        register() {
            this.loading[1] = true;
            setTimeout(() => (this.loading[1] = false), 3000)
            this.r.register(this.email, this.password, this.verifycode).then(res => {
                console.log(res)
                this.snackbar.show("注册成功，现在转入登录页面")
                this.jumpView(this.path.login)
            })
        },
        toLogin() {
            this.jumpView(this.path.login)
        }
    }
}
</script>