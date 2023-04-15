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
                                v-model="phone"
                                label="请输入手机号"
                                color="primary"
                                variant="outlined"
                            ></v-text-field>
                            <v-text-field
                                v-model="verifycode"
                                label="请输入密码"
                                color="primary"
                                variant="outlined"
                            ></v-text-field>
                            <v-btn type="submit" size="large" color="primary" block class="mt-2">注册</v-btn>
                        </v-form>
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
        phone: '',
        verifycode: ''
    }),
}
</script>