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
            <v-card-text>{{ dialog.data.content }}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" block @click="dialog.close()">确认</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-overlay>
</template>

<script>
export default {
    name: 'dialogView',
}
</script>