<template>
<v-overlay v-model="dialog.data.show">
    <v-dialog
        v-model="dialog.data.show"
        multi-line
        persistent
        width="auto"
    >
        <v-card>
            <v-card-title>{{ dialog.data.title }}</v-card-title>
            <v-card-text>
                <component :is="dialog.component" ref="component" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" block @click="dialog.close()">确认</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-overlay>
</template>

<script>
import transferList from '@/components/transfer-list.vue'
import updatePermission from '@/components/update-permission.vue'
import addUserPermission from '@/components/add-user-permission.vue'
import bucketCreate from '@/components/bucket-create.vue'
import fileUpload from '@/components/file-upload.vue'

export default {
    name: 'popupsView',
    components: {
        transferList,
        updatePermission,
        addUserPermission,
        bucketCreate,
        fileUpload,
    }
}
</script>