<template>
<v-container>
    <v-sheet width="400" class="mx-auto">
        <v-form fast-fail>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">Bucket名称</v-label>
                </v-col>
                <v-col cols="9">
                    <v-text-field
                        v-model="bucketName"
                        label="请输入Bucket名称"
                        color="primary"
                        variant="solo"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">读写权限</v-label>
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
            <!-- <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">版本控制</v-label>
                </v-col>
                <v-col cols="9">
                    <v-switch
                        v-model="versionControl"
                        hide-details="true"
                        inset
                        color="primary"
                    ></v-switch>
                </v-col>
            </v-row> -->
        </v-form>
        <div class="mt-2">
            <v-row>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="4">
                    <v-btn color="primary" @click="createBucket" block>创建</v-btn>
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
    name: 'bucketCreateView',
    data: () => ({
        bucketName: '',
        versionControl: false,
        permission: '1',
        loading: false,
    }),
    methods: {
        createBucket() {
            if(this.bucketName == '') {
                this.snackbar.show("Bucket名称不可为空!", 3000)
                return
            }
            this.loading = true;
            setTimeout(() => (this.loading = false), 3000)

            this.r.addBucket(this.bucketName, this.permission).then(res => {
                console.log(res)
                this.snackbar.show("创建成功", 3000)
                setTimeout(() => (this.cancel()), 1000)
            })
        },
        cancel() {
            this.popup.close()
        },
    },
    created() {
        console.log("bucketCreate created")
    }
}
</script>