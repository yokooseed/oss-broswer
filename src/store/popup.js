import { defineStore } from "pinia";

export const popupStore = defineStore('popup', {
    state: () => ({
        data: {
            show: false,
            title: "null",
            component: "",
        },
    }),
    actions: {
        close(){
            this.data.show = false
        },
        load(title, name) {
            this.data.title = title
            this.data.component = name
        },
        update(data){
            this.data = data
        },
    }
})