import { createApp } from "vue";
import snackbarComponent from "@/components/snackbarr.vue";

export default {
    snackbar (content, option = {}) {
        const node = document.createElement('div');
        const view = createApp(snackbarComponent, {
            content: content,
            close: () => {
                view.unmount(node);
                document.body.removeChild(node);
            },
            ...option
        })
        document.body.appendChild(node);
        view.mount(node);
    }
};