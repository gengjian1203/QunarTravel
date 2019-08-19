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
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt="故宫">
        <p class="item-name">故宫</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">111</span>
          起
        </p>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt="故宫">
        <p class="item-name">故宫</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">111</span>
          起
        </p>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt="故宫">
        <p class="item-name">故宫</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">111</span>
          起
        </p>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt="故宫">
        <p class="item-name">故宫</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">111</span>
          起
        </p>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt="故宫">
        <p class="item-name">故宫</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">111</span>
          起
        </p>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt="故宫">
        <p class="item-name">故宫</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">111</span>
          起
        </p>
      </li>

    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeRecommend'
}

</script>

<style lang="stylus" scoped>
  .wrap
    font-size: .28rem
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
        font-size: .35rem
        line-height: .9rem
        .icon-fire
          margin-left: .25rem
          font-size: .4rem
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
        padding-right: .05rem
        padding-bottom: 3rem
        .item-img
          overflow: hidden
          width: 100%
        .item-name
          text-align: center
          font-size: .24rem
          margin: .1rem 0;
        .item-price
          text-align: center
          font-size: .24rem
          .item-price-sign
            font-size: .22rem
            color: #fd8324
            margin-right: -.12rem
          .item-price-num
            color: #fd8324
</style>
