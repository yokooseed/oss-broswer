<template>
<v-overlay v-model="popup.data.show">
    <v-dialog
        v-model="popup.data.show"
        multi-line
        persistent
        width="auto"
    >
        <v-card>
            <v-card-title>
                {{ popup.data.title }}
                <v-btn variant="plain" style="float: right;" icon="mdi-close" @click="close"></v-btn>
            </v-card-title>
            <component :is="popup.data.component" ref="component" />
        </v-card>
    </v-dialog>
</v-overlay>
</template>

<script>
import transferList from '@/components/file/transfer-list.vue'
import updatePermission from '@/components/bucket/update.vue'
import addUserPermission from '@/components/bucket/add-user.vue'
import bucketCreate from '@/components/bucket/create.vue'
import bucketDetail from '@/components/bucket/detail.vue'
import fileUpload from '@/components/file/upload.vue'
import fileDetail from '@/components/file/detail.vue'

export default {
    name: 'popupsView',
    components: {
        'transfer-list': transferList,
        'update-permission': updatePermission,
        'add-user-permission': addUserPermission,
        'bucket-create': bucketCreate,
        'file-upload': fileUpload,
        'bucket-detail': bucketDetail,
        'file-detail': fileDetail,
    },
    methods: {
        close() {
            this.popup.close()
        }
    }
}
</script>