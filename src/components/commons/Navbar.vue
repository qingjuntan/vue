<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a @click='goback' class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">{{title}}</h1>
    </header>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        //title: ''
      }
    },
    props: ['title'],
    methods: {
      goback(){
        this.$router.go(-1);
      }
    }

  }
</script>
<style scoped>
  .mui-bar {
    position: relative;
    height:50px;
  }

</style>