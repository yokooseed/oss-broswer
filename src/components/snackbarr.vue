<template>
    <v-snackbar
        v-model="show"
        :timeout="timeout"
        location="bottom"
        style="text-align: center;"
    >
        <div>{{ content }}</div>
        <template v-slot:actions>
            <v-btn
                color="blue"
                variant="text"
                @click="close"
            >关闭</v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { defineComponent } from 'vue-demi';

// defineProps({
//     show: {
//         type: Boolean,
//         default: false
//     },
//     content: {
//         type: String,
//         default: ''
//     },
//     timeout: {
//         type: Number,
//         default: 3000
//     },
//     close: {
//         type: Function,
//         default: () => {}
//     }
//     // btns: {
//     //     type: Array,
//     //     default: {
//     //         show: {
//     //             type: Boolean,
//     //             default: false
//     //         },
//     //         color: {
//     //             type: String,
//     //             default: 'primary'
//     //         },
//     //         text: {
//     //             type: String,
//     //             default: '关闭'
//     //         },
//     //         click: {
//     //             type: Function,
//     //             default: () => {}
//     //         }
//     //     }
//     // },
// })

export default defineComponent({
    name: 'snackbarView',
    props: {
            content: {
                type: String,
                default: ''
            },
            timeout: {
                type: Number,
                default: 3000
            },
            functions: {
                type: Function,
                default: () => {}
            }
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        close() {
            this.show = false
            this.$emit('functions')
        }
    }
})
</script>