<template>
<v-container>
    <v-sheet width="400" class="mx-auto">
        <v-form fast-fail>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">账号ID</v-label>
                </v-col>
                <v-col cols="9">
                    <v-text-field
                        v-model="account"
                        label="请输入账号ID"
                        color="primary"
                        variant="solo"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">用户权限</v-label>
                </v-col>
                <v-col cols="9">
                    <v-btn-toggle
                        v-model="permission"
                        rounded="50"
                        color="primary"
                        shaped
                        mandatory
                    >
                        <v-btn value="0">只读</v-btn>
                        <v-btn value="1">只写</v-btn>
                        <v-btn value="2">完全控制</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        </v-form>
        <div class="mt-2">
            <v-row>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="4">
                    <v-btn color="primary" @click="createBucket" block>添加</v-btn>
                </v-col>
                <v-col cols="2">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="4">
                    <v-btn @click="cancel" variant="outlined" block>返回</v-btn>
                </v-col>
            </v-row>
        </div>
    </v-sheet>
</v-container>
</template>

<script>
export default {
    name: 'addUserPermission',
    data: () => ({
        account: '',
        versionControl: false,
        permission: '0',
    }),
    methods: {
        createBucket() {
        },
        cancel() {
            this.popup.loadIndex(5)
        },
    }
}
</script>