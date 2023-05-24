import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'

import './assets/styles.css'


createApp(App).use(store).use(router).use(Antd).mount('#app')
