import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mockHttp from './mock/mockHttp'
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID
};

// Initialize Firebase (login/cadastro dependem de credenciais reais em VUE_APP_FIREBASE_*;
// sem elas, seguimos sem travar o restante do site, que roda 100% com dados mock)
let fbApp = null;
try {
  fbApp = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase não inicializado:', error);
}

/**
 * Vue initialization
 */
 const app = createApp(App);
 app.config.globalProperties.$http = mockHttp; // Site 100% estático: respostas simuladas em src/mock, sem backend real
 app.config.globalProperties.$firebase = fbApp;

 const toast_options = {
    // You can set your default options here
    position: POSITION.BOTTOM_RIGHT
};



app.use(router).use(Toast, toast_options).use(store).mount('#app')
