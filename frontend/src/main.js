import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import './assets/tailwind.css';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';

const app = createApp(App);

// 注册 Axios 到 Vue 实例
app.config.globalProperties.$axios = axios;

app.use(router);
app.use(ElementPlus);
app.mount('#app');

