<template>
<div class="bucket-list">
    <v-card class="bucket-list-tab">
        <v-tabs
            v-model="tab"
            color="primary"
        >
            <v-tab value="0">全部</v-tab>
            <v-tab value="1">本地</v-tab>
            <v-tab value="2">备份</v-tab>
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
                                <th class="text-left">Bucket权限</th>
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
                                <td>{{ item.auth }}</td>
                                <td class="text-center">
                                    <v-btn variant="plain" color="primary">详情</v-btn>
                                    <v-btn variant="plain" color="primary">修改权限</v-btn>
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
                </v-window-item>

                <v-window-item value="1">
                Two
                </v-window-item>

                <v-window-item value="2">
                Three
                </v-window-item>
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
    name: "bucketPermissionManageView",
    data: () => ({
        tab: null,
        test: [
            {
                name: "Bucket1",
                auth: "123.5MB",
            },
            {
                name: "Bucket2",
                auth: "123.5MB",
            },
            {
                name: "Bucket3",
                auth: "123.5MB",
            },
            {
                name: "Bucket4",
                auth: "123.5MB",
            }
        ]
    }),
}
</script>