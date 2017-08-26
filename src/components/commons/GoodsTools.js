/**
 * Created by 郯俊卿 on 2017/8/26.
 */
let goodsTools = {};

//初始化储存商品对象(从本地储存中获取的是字符串类型，所以需要用JSON.parse转化为json对象)
let prods = JSON.parse(window.localStorage.getItem('prods')) || {};

//添加功能
goodsTools.addOrUpDate = function (goods) {
  if (prods[goods.id]) {
    //如果有该商品id，就把数量增加
    prods[goods.id] += goods.num;
  } else {
    //如果没有改商品的id，就把改商品的数量添加到对象prods中以id:num的形式
    prods[goods.id] = goods.num;
  }
  //同步到本地存储中
  this.save(prods);
}

//删除功能
goodsTools.deleteProd = function (prodId) {
  //删除对象的键，即可删除这个键值对
  delete prods[prodId];
  //同步到本地存储中
  this.save(prods);
}

//获取数据功能
goodsTools.getProds = function (id) {
  let prods = JSON.parse(window.localStorage.getItem('prods')) || {};
  if (id) {
    return prods[id];
  } else {
    return prods;
  }
}
//时时存储对象prods到本地存储中，不过以字符串形式传进去；达到同步的作用
goodsTools.save = function (prods) {
  window.localStorage.setItem('prods', JSON.stringify(prods));
}

//返回商品总数功能
goodsTools.getProdsCount = function () {
  let sum = 0;
  let prods = this.getProds();
  for (let id in prods) {
    sum += prods[id];
  }
  return sum;
}
//输出这个goodsTools工具对象，便于其他组件引用并使用
export default goodsTools;