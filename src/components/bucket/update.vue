<template>
<v-container>
    <v-sheet width="700" class="mx-auto">
        <v-form fast-fail>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">Bucket名称</v-label>
                </v-col>
                <v-col cols="9">
                    <v-label class="pa-2 ma-2">{{ bucketName }}</v-label>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">公共权限</v-label>
                </v-col>
                <v-col cols="9">
                    <v-btn-toggle
                        v-model="permission"
                        rounded="50"
                        color="primary"
                        shaped
                        mandatory
                    >
                        <v-btn value="1">只读</v-btn>
                        <v-btn value="2">读写</v-btn>
                        <v-btn value="3">私有</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">用户权限</v-label>
                </v-col>
                <v-col cols="auto">
                    <v-btn @click="addUser" color="primary">添加用户</v-btn>
                    <v-table
                            fixed-header
                            density="compact"
                            class="bucket-list-table"
                        >
                            <thead>
                                <tr color="primary">
                                    <th class="text-left">#</th>
                                    <th class="text-left">用户ID</th>
                                    <th class="text-left">用户名</th>
                                    <th class="text-left">用户权限</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(item, index) in userList"
                                    :key="index"
                                >
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.user_id }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ transPermission(item.type) }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                </v-col>
            </v-row>
        </v-form>
        <div class="mt-2">
            <v-row>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="4">
                    <v-btn color="primary" @click="updateBucket" block>确认修改</v-btn>
                </v-col>
                <v-col cols="2">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="4">
                    <v-btn @click="cancel" variant="outlined" block>取消</v-btn>
                </v-col>
            </v-row>
        </div>
    </v-sheet>
</v-container>
</template>

<script>
export default {
    name: 'updatePermissionView',
    data: () => ({
        bucketName: '',
        bucketID: '',
        permission: '1',
        userList: [],
    }),
    methods: {
        updateBucket() {
            this.r.updateBucketAuth(this.bucketID, this.permission).then(res => {
                console.log(res)
                this.popup.close()
            })
        },
        transPermission(value = '0') {
            if(value == '1') return '只读'
            if(value == '2') return '读写'
            if(value == '3') return '禁止'
            return '禁止'
        },
        addUser() {
            this.popup.close()
            this.popup.loadIndex(3)
        },
        cancel() {
            this.popup.close()
        },
        getUserList() {
            this.r.getBucketUserList(this.bucketID).then(res => {
                console.log(res)
                this.userList = res.data.userList
            })
        },
    },
    created() {
        console.log(this.popup.params)
        this.bucketID = this.popup.params.id
        this.bucketName = this.popup.params.name
        this.getUserList()
    }
}
</script>