import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

import indexComponent from '../components/index.vue'
import headerComponent from '../components/header.vue'
import slideComponent from '../components/slide.vue'
import barComponent from '../components/bar_tab.vue'
const router = new VueRouter({
    mode: 'history',
    // history: false,
    hashbang: true,
    base: __dirname,
    routes: [
        {
            path: '/index',
            component: indexComponent
        },
        {
            path: '/',
            component: indexComponent
        }
    ]
});
Vue.component('headerComponent',headerComponent);
Vue.component('slideComponent',slideComponent)
Vue.component('barComponent',barComponent)

export default router