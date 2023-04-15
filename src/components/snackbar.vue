<template>
    <v-snackbar
        v-model="snackbar.data.show"
        :timeout="snackbar.data.timeout"
        location="bottom"
        style="text-align: center;"
    >
        <div>{{ snackbar.data.content }}</div>
        <template v-slot:actions>
            <v-btn
                :color="snackbar.data.color"
                variant="text"
                @click="snackbar.close()"
                v-show="snackbar.data.btnshow"
            >关闭</v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { defineComponent } from 'vue-demi';

export default defineComponent({
    name: 'snackbarView',
})
</script>