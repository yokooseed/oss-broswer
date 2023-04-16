<template>
<v-container>
    <v-sheet width="600" class="mx-auto">
        <v-form fast-fail>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">上传目录</v-label>
                </v-col>
                <v-col cols="9">
                    <v-btn-toggle
                        v-model="dirname"
                        rounded="50"
                        color="primary"
                        shaped
                        mandatory
                    >
                        <v-btn value="0">指定目录</v-btn>
                        <v-btn value="1">当前目录</v-btn>
                    </v-btn-toggle>
                    <v-label>/storage/emulated/Download</v-label>
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
                        <v-btn value="0">私有</v-btn>
                        <v-btn value="1">公共读</v-btn>
                        <v-btn value="2">公共读写</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">待上传文件</v-label>
                </v-col>
                <v-col cols="9">
                    <v-file-input
                        prepend-icon=""
                        show-size
                        counter
                        multiple
                        label="请选择你需要上传的文件，支持多选"
                        v-model="files"
                    >
                        <template v-slot:selection="{ fileNames }">
                            <template v-for="fileName in fileNames" :key="fileName">
                                <v-chip size="small" label color="primary" class="me-2">{{  fileName }}</v-chip>
                            </template>
                        </template>
                    </v-file-input>
                </v-col>
            </v-row>
        </v-form>
        <div class="mt-2">
            <v-row>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="4">
                    <v-btn color="primary" @click="upload" block>上传</v-btn>
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
    name: 'fileUploadView',
    data: () => ({
        bucket: '',
        versionControl: false,
        permission: '0',
        dirname: '0',
        files: [],
    }),
    methods: {
        upload() {
            console.log(this.files[0])
            console.log(this.files.length)
        },
        cancel() {
            this.popup.close()
        },
    }
}
</script>