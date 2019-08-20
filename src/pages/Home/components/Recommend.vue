<template>
  <div class="wrap">
    <div class="top"></div>
    <div class="title">
      <div class="title-left">
        <span class="iconfont icon-fire">&#xe7a8;</span>
        本周热门榜单
      </div>
      <div class="title-right">
        全部榜单
        <span class="iconfont icon-more">&#xe602;</span>
      </div>
    </div>
    <ul class="content">
      <li class="item" v-for="item of ListContent" :key="item.id">
        <img class="item-img" :src="item.url" :alt="item.name">
        <p class="item-name">{{item.name}}</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">{{item.price}}</span>
          起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeRecommend',
  data () {
    return {
      ListContent: [{
        id: 10000,
        url: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        name: '故宫故宫故宫故宫故宫故宫',
        price: 666666666666666
      }, {
        id: 10001,
        url: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg',
        name: '八达岭长城',
        price: 40
      }, {
        id: 10002,
        url: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        name: '圆明园',
        price: 25
      }, {
        id: 10003,
        url: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg',
        name: '颐和园',
        price: 38
      }, {
        id: 10004,
        url: 'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg',
        name: '恭王府',
        price: 28.8
      }, {
        id: 10005,
        url: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_250x250_ee99c18e.jpg',
        name: '天坛公园',
        price: 40
      }, {
        id: 10006,
        url: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_250x250_ecfa0df2.jpg',
        name: '水立方',
        price: 246
      }, {
        id: 10007,
        url: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
        name: '北京世界园艺博览会',
        price: 108
      }, {
        id: 10008,
        url: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_250x250_6c4c9885.jpg',
        name: '北京欢乐谷',
        price: 195
      }, {
        id: 10009,
        url: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_250x250_d76e727c.jpg',
        name: '北京动物园',
        price: 24.9
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'

  .wrap
    .top
      width: 100%
      height: .20rem
      background: #f5f5f5
    .title
      width: 100%
      height: 0
      padding-bottom: .9rem
      .title-left
        float: left
        font-size: .32rem
        line-height: .9rem
        .icon-fire
          margin-left: .25rem
          font-size: .36rem
          color: #fd7c4e
      .title-right
        float: right
        line-height: .9rem
    .content
      overflow-x: scroll
      overflow-y: hidden
      white-space: nowrap
      width: calc(100% - .48rem)
      padding: 0 .24rem
      .item
        display: inline-block
        overflow: hidden
        width: 28.5%
        height: 0
        padding-right: .1rem
        padding-bottom: 40.5%
        .item-img
          overflow: hidden
          width: 100%
        .item-name
          text-align: center
          font-size: .24rem
          margin-top: .16rem
          margin-bottom: .08rem
          ellipsis()
        .item-price
          text-align: center
          font-size: .24rem
          color: #626262
          ellipsis()
          .item-price-sign
            font-size: .22rem
            color: #fd8324
            margin-right: -.1rem
            font-size: .28rem
          .item-price-num
            color: #fd8324
            margin-right: -.05rem
            font-size: .28rem
</style>
