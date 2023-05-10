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
                                v-model="password"
                                label="请输入密码"
                                color="primary"
                                type="password"
                                variant="outlined"
                            ></v-text-field>
                            <v-btn size="large" color="primary" block class="mt-2" @click="test
                            ">登录</v-btn>
                        </v-form>
                        <div class="mt-2">
                            <!-- <v-btn variant="plain">密码登录</v-btn> -->
                            <v-btn variant="plain" @click="toRegister">立即注册</v-btn>
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
        password: '',
        loading: false,
    }),
    methods: {
        test() {
            this.create.snackbar("test")
        },
        onLogin() {
            this.loading = true;
            setTimeout(() => (this.loading = false), 3000)

            this.r.login(this.email, this.password).then(res => {
                console.log(res.data)
                this.settoken(res.data.tokenValue)
                this.global.user.email = res.data.userMail
                this.global.user.username = res.data.userName
                this.snackbar.show("登录成功，返回首页", 3000)
                this.global.islogin = true
                this.jumpView(this.path.root)
            })
        },
        toRegister() {
            this.jumpView(this.path.register)
        }
    }
}
</script>