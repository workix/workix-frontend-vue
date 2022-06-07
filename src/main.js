import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Axios from 'axios'

/**
 * Vue initialization
 */
 const app = createApp(App);
 app.config.globalProperties.$http = Axios; // Allow axios in all componenets this.$http.get

app.use(router).use(store).mount('#app')
