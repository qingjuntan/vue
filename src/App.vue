<template>
  <div>
    <mt-header title="前端9期"></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link :to="{name:'home'}" class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon icon-gouwuche"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link :to="{name:'vip'}" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon icon-huiyuan1"><span class="mui-badge">8</span></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link :to="{name:'shopcart'}" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon icon-gouwuche-white-copy"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link :to="{name:'search'}" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon icon-work-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
      }
    ,mounted(){
      
    }
  }
</script>
<style>

</style>