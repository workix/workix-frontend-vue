import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Axios from 'axios'
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
/**
 * Vue initialization
 */
 const app = createApp(App); 
 app.config.globalProperties.$http = Axios; // Allow axios in all componenets this.$http.get

 const toast_options = {
    // You can set your default options here
    position: POSITION.BOTTOM_RIGHT
};

app.use(router).use(Toast, toast_options).use(store).mount('#app')
