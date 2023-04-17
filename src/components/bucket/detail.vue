<template>
<v-container>
    <v-sheet width="400" class="mx-auto">
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
                    <v-label class="pa-2 ma-2">读写权限</v-label>
                </v-col>
                <v-col cols="9">
                    <v-btn-toggle
                        v-model="permission"
                        rounded="50"
                        color="primary"
                        shaped
                        mandatory
                        disabled
                    >
                        <v-btn value="0">私有</v-btn>
                        <v-btn value="1">公共读</v-btn>
                        <v-btn value="2">公共读写</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-label class="pa-2 ma-2">版本控制</v-label>
                </v-col>
                <v-col cols="9">
                    <v-switch
                        v-model="versionControl"
                        hide-details="true"
                        inset
                        color="primary"
                        disabled
                    ></v-switch>
                </v-col>
            </v-row>
        </v-form>
    </v-sheet>
</v-container>
</template>

<script>
export default {
    name: 'bucketDetailView',
    data: () => ({
        bucketName: 'bucket-name',
        versionControl: false,
        permission: '0',
    }),
    methods: {
        loadDetail() {
            this.r.getFile(this.popup.param.bucketID, this.popup.param.name).then(res => {
                console.log(res)
            })
        }
    },
    created() {
        this.loadDetail()
    }
}
</script>