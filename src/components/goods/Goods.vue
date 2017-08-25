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
      loadmoreFirst(){
        this.$ajax.get('getgoods?pageindex=1')
            .then(res => {
              this.goodsList = res.data.message;
            })
            .catch(err => {
              console.log('获取商品列表失败', err);
            })
      },
      loadmoreByPage(page){//追加数据
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
      loadBottom(){
        this.loadmoreByPage(this.pageIndex);
        this.pageIndex++;
        this.$refs.loadmore.onBottomLoaded();
      },
      stateChange(s){
        console.log(s);
      }
    },
    mounted(){
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