<template>
  <div>
    <mt-header title="前端9期" ref="n1"></mt-header>
    <transition name="main" mode="out-in">
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab" ref="n2">
      <router-link :to="{name:'home'}" class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon icon-gouwuche"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link :to="{name:'vip'}" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon icon-huiyuan1"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link :to="{name:'shopcart'}" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon icon-gouwuche-white-copy"><span class="mui-badge">{{num}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link :to="{name:'search'}" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon icon-work-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script type=text/ecmascript-6>

  import Connector from './components/commons/Connector.js';

  export default {
    data(){
      return {
        num: 0,
      }
    }
    , mounted(){
      
    },
    created(){
      //父元素开始监听changeNum事件的，num是子元素传过来的参数
      Connector.$on('changeNum', num => {
        this.num = this.num + num;
      })
      //监听总数
      Connector.$on('changeShopcart2', num => {
        this.num = num;
      })
    }
  }
</script>
<style scoped>
  .main-enter-active, .main-leave-active {
    transition: opacity .5s
  }

  .main-enter, .main-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }


</style>