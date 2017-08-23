<template>
  <div class="tmpl">
    <nav-bar title="新闻列表"></nav-bar>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="newlist in newlists" :key="newlist.
      id">
        <router-link :to="{name:'newdetail',query:{myid:newlist.id}}">
          <img class="mui-media-object mui-pull-left" :src="newlist.img_url">
          <div class="mui-media-body">
            <span>{{newlist.title}}</span>
            <div class="news-desc">
              <p>点击次数:{{newlist.click}}</p>
              <p>{{newlist.add_time |time}}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    data(){
      return {
        newlists: []
      }
    }
    , created(){
      this.$ajax.get('getnewslist')
          .then(res => {
            //console.log(res);
            this.newlists = res.data.message;

          })
          .catch(err => {
            console.log("新闻列表加载失败啦", err);
          })
    }
  }
</script>
<style scoped>
  .mui-media-body p {
    color: #0bb0f5;
  }

  .news-desc p:nth-child(1) {
    float: left;
  }

  .news-desc p:nth-child(2) {
    float: right;
  }

</style>
