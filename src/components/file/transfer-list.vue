<template>
<div class="transfer-list">
    <v-card class="bucket-list-tab">
        <v-tabs
            v-model="tab"
            color="primary"
        >
            <v-tab value="0">上传列表</v-tab>
            <v-tab value="1">下载列表</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="0">
                    <v-card class="mx-auto">
                        <v-list :items="items"></v-list>
                    </v-card>
                </v-window-item>
                <v-window-item value="1">
                    <v-card class="mx-auto">
                        <v-list :items="items"></v-list>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</div>
</template>

<style>
.transfer-list {
    background-color: transparent;
    width: 600px;
}
</style>

<script>
export default {
    name: 'transferListView',
    data: () => ({
        tab: null,
            items: [
            { type: 'divider' },
            { type: 'subheader', title: '正在上传' },
            { type: 'divider' },
            {
                title: 'Item #1',
                value: 1,
            },
            {
                title: 'Item #2',
                value: 2,
            },
            {
                title: 'Item #3',
                value: 3,
            },
            { type: 'divider' },
            { type: 'subheader', title: '上传完成' },
            { type: 'divider' },
            {
                title: 'Item #4',
                value: 4,
            },
            {
                title: 'Item #5',
                value: 5,
            },
            {
                title: 'Item #6',
                value: 6,
            },
        ],
    }),
}
</script>