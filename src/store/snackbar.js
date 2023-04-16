import { defineStore } from "pinia";

export const snackbarStore = defineStore('snackbar', {
    state: () => ({
        data: {
            show: false,
            content: "null",
            color: "blue",
            timeout: "2000",
            btnshow: false,
        },
    }),
    actions: {
        close(){
            this.data.show = false
        },
        show(content, timeout = 1000, btnshow = true){
            this.data.timeout = timeout;
            this.data.content = content;
            this.data.btnshow = btnshow;
            this.data.show = true;
        },
    }
})