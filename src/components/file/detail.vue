<template>
<v-container>
    <v-sheet width="400" class="mx-auto">
        <v-form fast-fail>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">文件名称</v-label>
                </v-col>
                <v-col cols="9">
                    <v-label class="pa-2 ma-2">{{ fileName }}</v-label>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">文件大小</v-label>
                </v-col>
                <v-col cols="9">
                    <v-label class="pa-2 ma-2">{{ fileSize }}</v-label>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">修改时间</v-label>
                </v-col>
                <v-col cols="9">
                    <v-label class="pa-2 ma-2">{{ updateTime }}</v-label>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">文件权限</v-label>
                </v-col>
                <v-col cols="9">
                    <v-label class="pa-2 ma-2">{{ permission }}</v-label>
                </v-col>
            </v-row>
        </v-form>
        <div class="mt-2">
            <v-row>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="4">
                    <v-btn color="primary" @click="upload" block>下载</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-btn @click="cancel" variant="outlined" block>删除</v-btn>
                </v-col>
            </v-row>
        </div>
    </v-sheet>
</v-container>
</template>

<script>

export default {
    name: 'bucketDetailView',
    data: () => ({
        fileName: 'IMG_3301.jpg',
        fileSize: '80 KB',
        updateTime: '1970-01-01 08:00:00',
        permission: '私有',
    }),
    methods: {
        loadDetail() {

            console.log(this.popup.params)
            this.r.getFile(this.popup.params.bucketID, this.popup.params.name).then(res => {
                console.log(res)
            })
        }
    },
    created() {
        this.loadDetail()
    }
}
</script>