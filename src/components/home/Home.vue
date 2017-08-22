<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <a :href="img.url">
          <img :src="img.img" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
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
  .mint-swipe {
    height: 200px;
  }
  .mint-swipe img{
    width: 100%;
    height:200px;
  }
</style>