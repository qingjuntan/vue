<template>
  <div>
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <a :href="img.url">
          <img :src="img.img" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!--九宫格-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'news'}">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">Home</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'photolist' }" >
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图文分享</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a>
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a >
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">location</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a >
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">搜索资讯</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a >
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a></li>
      </ul>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    data(){
      return {
        imgs: []
      }
    }
    , created(){
      this.$ajax.get('getlunbo')
          .then(res => {
            console.log(res);
            this.imgs = res.data.message;

          })
          .catch(err => {
            console.log("轮播图加载失败啦", err);
          })
    }
  }
</script>
<style>
  /*tabpar颜色设置*/
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe img {
    width: 100%;
    height: 200px;
  }

  .icon-gouwuche {
    color: blue;
  }

  .icon-huiyuan1 {
    color: green;
  }

  .icon-gouwuche-white-copy {
    color: orange;
  }

  .icon-work-search {
    color: red;
  }

  .mui-tab-label {
    color: purple;
  }

  /*设置九宫格*/
  .mui-content .mui-table-view {
    background-color: #fff;
  }

  /*清除原有图标*/
  .mui-icon-home:before, .mui-icon-email:before, .mui-icon-chatbubble:before, .mui-icon-location:before, .mui-icon-search:before, .mui-icon-phone:before {
    content: '';
  }

  /*设置背景图片*/
  .mui-icon-home {
    background-image: url('../../static/img/news.png');
    background-repeat: round;
  }

  .mui-icon-email {
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
  }

  .mui-icon-chatbubble {
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
  }

  .mui-icon-location {
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
  }

  .mui-icon-search {
    background-image: url('../../static/img/search.png');
    background-repeat: round;
  }

  .mui-icon-phone {
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
  }

  /*设置字体图标大小*/
  .mui-icon {
    height: 50px;
    width: 50px;
  }
</style>