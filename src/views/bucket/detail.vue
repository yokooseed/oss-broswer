<template>
<div>
    <v-row>
        <v-col cols="1">
            <v-btn color="primary" @click="toUpload" class="mt-3">上传文件</v-btn>
        </v-col>
        <!-- <v-col cols="1">
            <v-btn variant="outlined" color="primary" class="mt-3">创建文件夹</v-btn>
        </v-col> -->
        <!-- <v-col cols="1">
            <v-btn variant="outlined" color="primary" class="mt-3">清空Bucket</v-btn>
        </v-col> -->
        <v-col cols="auto">
            <v-switch
                v-model="showHistory"
                label="显示历史版本"
                color="primary"
                hide-details
            ></v-switch>
        </v-col>
    </v-row>
    <v-table
        fixed-header
        density="compact"
        class="bucket-list-table"
    >
        <thead>
            <tr color="primary">
                <th class="text-left">#</th>
                <th class="text-left">文件名称</th>
                <th class="text-left">大小</th>
                <th class="text-left">修改时间</th>
                <th class="text-center">操作</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(item, index) in test"
                :key="index"
            >
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.capacity }}</td>
                <td>{{ item.updateTime }}</td>
                <td class="text-center">
                    <v-btn variant="plain" color="primary" @click="toDetail(item.id, item.name)">详情</v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
    <v-pagination
        :length="5"
        style="float:right; margin-top: 20px;"
        size="small"
        total-visible="1"
    ></v-pagination>
</div>
</template>

<style>
</style>


<script>
export default {
    name: 'bucketDetail',
    data: () => ({
        showHistory: false,
        items: [],
    }),
    methods: {
        toUpload() {
            this.popup.loadIndex(1)
        },
        toDetail(value, name) {
            console.log(value, name)
            this.popup.loadIndex(6)
        },
        loadFiles() {
            this.r.getBucketFileList(this.$route.params.id).then(res => {
                console.log(res)
                this.items = res.data.fileSet
            })
        },
    },
    created() {
        this.loadFiles();
    },
}
</script>