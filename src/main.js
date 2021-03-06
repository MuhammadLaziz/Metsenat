import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "@/assets/style/global.scss";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import store from './store';
import Maska from 'maska';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(store);
app.use(Maska);
app.use(Toast)
app.mount('#app');
