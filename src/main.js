/**
 * Created by 郯俊卿 on 2017/8/22.
 */

//引入第三方包开始
import Vue from "vue";


//引入组件开始
import Home from './components/home/Home.vue';
import Vip from './components/vip/Vip.vue';
import Shopcart from './components/shopcart/Shopcart.vue';
import Search from './components/search/Search.vue';
import App from './App.vue';
//引入组件结束

//MintUi:开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//MintUi:结束

//Mui:开始
import './static/libs/mui-master/dist/css/mui.css';
//Mui:结束

//VueRouter:开始
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {path: '/', redirect: {name: "home"}, component: Home}
    , {name: 'home', path: '/home', component: Home}
    , {name: 'vip', path: '/vip', component: Vip}
    , {name: 'shopcart', path: '/shopcart', component: Shopcart}
    , {name: 'search', path: '/search', component: Search}
  ]
})
//VueRouter:结束


//Axiso开始
import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
//Axiso结束


new Vue({
  el: '#app',
  router,
  render: c=>c(App)
})