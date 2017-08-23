/**
 * Created by 郯俊卿 on 2017/8/22.
 */

//引入第三方包开始
import Vue from "vue";

//引入全局样式
import './static/css/global.css';


//引入组件开始
import Photodetail from './components/photo/Photodetail.vue';
import Photos from './components/photo/Photolist.vue';
import Newdetail from './components/news/Newdetail.vue';
import News from './components/news/News.list.vue';
import Home from './components/home/Home.vue';
import Vip from './components/vip/Vip.vue';
import Shopcart from './components/shopcart/Shopcart.vue';
import Search from './components/search/Search.vue';
import App from './App.vue';
//引入组件结束

//引入全局组件开始
import NavBar from './components/commons/Navbar.vue';
Vue.component('NavBar', NavBar);

import Common from './components/commons/Common.vue';
Vue.component('Common', Common);
//引入全局组件结束

//MintUi:开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//MintUi:结束

//Mui:开始
import './static/libs/mui-master/dist/css/mui.css';
//Mui:结束

//Monent:开始
import Moment from "moment";

Vue.filter('time', function (value) {
  return Moment(value).format("YYYY年MM月DD日");
});
//Monent:结束

//VuePreview开始
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
//VuePreview结束

//VueRouter:开始
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  linkActiveClass:'mui-actived',
  routes: [
    {path: '/', redirect: {name: "home"}, component: Home}
    , {name: 'home', path: '/home', component: Home}
    , {name: 'vip', path: '/vip', component: Vip}
    , {name: 'shopcart', path: '/shopcart', component: Shopcart}
    , {name: 'search', path: '/search', component: Search}
    , {name: 'news', path: '/news/newslist', component: News}
    , {name: 'commonts', path: '/commonts/navbar', component: NavBar}
    , {name: 'newdetail', path: '/news/newdetail', component: Newdetail}
    , {name: 'photolist', path: '/photo/photolist', component: Photos}
    , {name: 'photodetail', path: '/photo/photodetail/:imgid', component: Photodetail}
    , {name: 'common', path: '/commonts/common', component: Common}
  ]
})
//VueRouter:结束


//Axiso开始
import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
//Axiso结束

//设置加载拦截器
Axios.interceptors.request.use(config=> {
  MintUi.Indicator.open({
    text: '主人请稍等，吕傻逼正在玩命加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
//设置响应拦截器
Axios.interceptors.response.use(response=> {
  MintUi.Indicator.close();
  return response;
});


new Vue({
  el: '#app',
  router,
  render: c=>c(App)
})