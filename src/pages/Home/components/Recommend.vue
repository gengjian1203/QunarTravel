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
      <router-link tag="li"
                   class="item"
                   v-for="item of list"
                   :key="item.id"
                   :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" :alt="item.desc">
        <p class="item-name">{{item.desc}}</p>
        <p class="item-price">
          <span class="iconfont item-price-sign">&#xe76d;</span>
          <span class="item-price-num">{{item.price}}</span>
          起
        </p>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeRecommend',
  props: {
    list: Array
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
