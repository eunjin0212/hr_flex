import { createApp } from 'vue';
import { initApp } from "@/plugins/app-pre-init";
import App from './home.vue';
import '@/tailwind.css';
import VueCookies from 'vue3-cookies';

initApp(createApp(App), true).then((app) =>
    app
        .use(VueCookies)
        .mount("#app")
);