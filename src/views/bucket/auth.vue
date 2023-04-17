<template>
<div class="bucket-list">
    <v-card class="bucket-list-tab">
        <v-tabs
            v-model="tab"
            color="primary"
        >
            <v-tab value="0">全部</v-tab>
            <!-- <v-tab value="2">备份</v-tab> -->
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="0">
                    <v-table
                        fixed-header
                        density="compact"
                        class="bucket-list-table"
                    >
                        <thead>
                            <tr color="primary">
                                <th class="text-left">#</th>
                                <th class="text-left">Bcuket名称</th>
                                <th class="text-left">创建者</th>
                                <th class="text-left">创建时间</th>
                                <th class="text-left">Bucket权限</th>
                                <th class="text-center">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in items"
                                :key="index"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.creatorId }}</td>
                                <td>{{ item.createTime }}</td>
                                <td>{{ transformPermission(item.authority) }}</td>
                                <td class="text-center">
                                    <v-btn variant="plain" color="primary" @click="toDetail(item.id, item.name)">详情</v-btn>
                                    <!-- <v-btn variant="plain" color="primary">下载</v-btn> -->
                                    <v-btn variant="plain" color="primary" @click="toUpdate(item.id, item.name)">更新权限</v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                    <!-- <v-pagination
                        :length="5"
                        style="float:right; margin-top: 20px;"
                        size="small"
                        total-visible="1"
                        v-model="page"
                    ></v-pagination> -->
                </v-window-item>
                <!-- <v-window-item value="2"></v-window-item> -->
            </v-window>
        </v-card-text>
    </v-card>
</div>
</template>

<style>
.bucket-list {
    background-color: transparent;
    height: 100%;
}

.bucket-list-tab {
    background-color: transparent;
}

.bucket-list-table {
    background-color: rgb(255, 255, 255);
}
</style>

<script>
export default {
    name: "bucketAuthView",
    data: () => ({
        page: 1,
        tab: null,
        items: [],
    }),
    watch: {
        tab() {
            if(this.tab == 0) this.loadBucket();
            if(this.tab == 1) this.loadDeletedBucket();
        }
    },
    methods: {
        toDetail(id, name) {
            this.jumpView(this.path.bucketDetail + "/" + id, name + " - 详情")
        },
        transformPermission(value) {
            if(value == '1') return '只读'
            if(value == '2') return '读写'
            return '私有'
        },
        toUpdate(id, name) {
            this.popup.setparams({
                id: id,
                name: name
            })
            this.popup.loadIndex(5)
        },
        loadBucket() {
            this.r.getBucketList().then(res => {
                console.log(res)
                this.items = res.data.bucketList
                console.log(this.items)
            })
        },
        recoverBucket(id, index) {
            console.log(id)
            this.r.recoverBucket(id).then(res => {
                console.log(res)
                this.deletedItems.splice(this.deletedItems.indexOf(index), 1)
            })
        }
    },
    created() {
        this.loadBucket()
    }
}
</script>