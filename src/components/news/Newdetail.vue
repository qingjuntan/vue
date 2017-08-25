<template>
  <div class="tmpl">
    <nav-bar :title="title"></nav-bar>
    <div class="news-title">
      <p v-text="newsInfo.title"></p>
      <div>
        <span>{{newsInfo.click}}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{newsInfo.add_time|time}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsInfo.content"></div>
  </div>
</template>
<script type=text/ecmascript-6>
  export default {
    data(){
      return {
        newsInfo: {},
        title: ''
      }
    },
    created(){
      //获取路由参数
      let id = this.$route.query.myid;
      //拼接url发起请求
      this.$ajax.get('getnew/' + id)
          .then(res => {
            // console.log(res);
            this.newsInfo = res.data.message[0];
          })
          .catch(err => {
            console.log('获取图文详情数据失败', err);
          })
    },
    beforeRouteEnter (to, from, next) {
      let title = "";
      if (from.name === "new") {
        title = "新闻详情";
      } else if (from.name === "goodsdetail") {
        title = "商品详情";
      } else if (to.name.startsWith("new")) {
        title = "新闻详情";
      } else if (to.name.startsWith("goods")) {
        title = "商品详情";
      }
      next(vm => {
        vm.title = title;
      })
    },
  }


</script>
<style scoped>
  .news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
  }

  .news-title span {
    margin-right: 30px;
  }

  .news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  /*主体文章的左右距离*/

  .news-content {
    padding: 10 5;
  }
</style>
