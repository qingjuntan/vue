<template>
  <div class="tmpl" :style="{height:parentHeight+'px'}">
    <nav-bar title="商品列表"></nav-bar>

    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="autoFill"
                 @bottom-status-change="stateChange" ref="loadmore">
      <ul class="mui-table-view mui-grid-view" ref="ul">
        <li v-for="goods in goodsList" :key="goods.id" class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link :to="{name:'goodsdetail',params:{goodsid:goods.id}}">
            <img class="mui-media-object" :src="goods.img_url">
            <div class="mui-media-body">{{goods.title}}</div>
            <div class="desc">
              <div class="sell">
                <span>￥{{goods.sell_price}}</span>
                <s>￥{{goods.market_price}}</s>
              </div>
              <div class="detail">
                <div class="hot">
                  热卖中
                </div>
                <div class="count">
                  剩{{goods.stock_quantity}}件
                </div>
              </div>
            </div>
          </router-link>

        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script type=text/ecmascript-6>
  export default {
    data(){
      return {
        goodsList: [],
        autoFill: false,
        allLoaded: false,
        parentHeight: 0,
        pageIndex: 2,

      }
    },
    created(){
      this.loadmoreFirst();
    },
    methods: {
      //加载第一页数据
      loadmoreFirst(){
        this.$ajax.get('getgoods?pageindex=1')
            .then(res => {
              this.goodsList = res.data.message;
            })
            .catch(err => {
              console.log('获取商品列表失败', err);
            })
      },
      //追加数据，使得goodsList的数据追加更多的数据
      loadmoreByPage(page){
        this.$ajax.get('getgoods?pageindex=' + page)
            .then(res=> {
              if (res.data.message.length != 10) {
                this.allLoaded = true;
              }
              this.goodsList = this.goodsList.concat(res.data.message);
            })
            .catch(err=> {
              console.log('获取商品列表失败', err);
            })
      },
      //下拉函数的触发
      loadBottom(){
        this.loadmoreByPage(this.pageIndex);   //调用加载页面
        this.pageIndex++;                      //触发一次就++一次
        this.$refs.loadmore.onBottomLoaded();  //this.$refs.loadmore这里指的是组件对象，this.$refs.loadmore.$data就可以拿到组件里面的data数据，onBottomLoaded是组件里面的方法，这里可以调用！
      },
      stateChange(s){ //状态码，可以查看pull和drop状态
        //console.log(s);
      }
    },
    //进行doom操作
    mounted(){
      //this.$parent.$refs指的是app.vue中vue对象
      let headerHeight = this.$parent.$refs.n1.$el.offsetHeight;
      let footerHeight = this.$parent.$refs.n2.offsetHeight;
      this.parentHeight = document.documentElement.clientHeight - headerHeight - footerHeight;
    }
  }
</script>
<style>
  .mint-loadmore {
    overflow: visible;
  }

</style>