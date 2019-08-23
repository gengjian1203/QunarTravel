<template>
  <div class="wrap">
    <div class="top"></div>
    <div class="title">
      <span class="iconfont icon-heart">&#xe64e;</span>
      猜你喜欢
    </div>
    <ul class="content">
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
        @click.native="HandleItemClick(item)"
      >
        <img class="item-img" :src="item.imgUrl" :alt="item.desc">
        <div class="introduction">
          <div class="introduction-name">{{item.desc}}</div>
          <div class="introduction-comment">
            <div class="introduction-comment-star">{{strStar(item.star)}}</div>
            <div class="introduction-comment-num">{{item.comment}}条评论</div>
          </div>
          <div class="introduction-price">
            <div class="introduction-price-sign">￥</div>
            <div class="introduction-price-num">{{item.price}}</div>
            起
          </div>
          <div class="introduction-address">{{item.address}}</div>
          <div class="introduction-footnote" v-if="bFootnote(item.footnote)">{{item.footnote}}</div>
        </div>
      </router-link>
    </ul>
    <div class="foot border-top">
      查看所有产品
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'HomeLike',
  props: {
    list: Array
  },
  computed: {
    strStar () {
      return function (rate) {
        const star = '★★★★★☆☆☆☆☆'
        const nRate = Math.floor(parseFloat(rate))
        return star.slice(5 - nRate, 10 - nRate)
      }
    },
    bFootnote () {
      return function (strFootnote) {
        return (strFootnote !== '')
      }
    }
  },
  methods: {
    ...mapActions(['ChangNowStar', 'ChangNowComment', 'ChangNowStrategy']),
    HandleItemClick (item) {
      this.ChangNowStar(item.star)
      this.ChangNowComment(item.comment)
      this.ChangNowStrategy(item.strategy)
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "~style/mixins.styl"

  .wrap
    .top
      width: 100%
      height: .20rem
      background: #f5f5f5
    .title
      width: 100%
      height: 0
      padding-bottom: .96rem
      font-size: .32rem
      line-height: .96rem
      .icon-heart
        color: #fc5c5c
        font-size: .36rem
        margin-left: .25rem
        margin-right: -.05rem
    .content
      width: 100%
      padding-left: .25rem
      .item
        overflow: hidden
        width: 100%
        padding: .2rem 0
        .item-img
          float: left
          width: 2rem
          height: 2rem
        .introduction
          width: calc(100% - 2rem)
          float: left
          .introduction-name
            font-size: .35rem
            margin-top: .3rem
            margin-left: .2rem
          .introduction-comment
            width: 100%
            font-size: .24rem
            margin-top: .2rem
            .introduction-comment-star
              float: left
              color: #fdb345
              margin-left: .2rem
            .introduction-comment-num
              float: left
              color: #616161
              margin-left: .3rem
          .introduction-price
            clear: both
            font-size: .24rem
            margin-top: .95rem
            margin-left: .2rem
            .introduction-price-sign
              float: left
              color: #fdb345
              font-weight: bold
            .introduction-price-num
              float: left
              color: #fd8324
              font-size: .42rem
              margin-top: -.2rem
              margin-left: -.05rem
          .introduction-address
            float: right
            width: 25%
            text-align: right
            font-size: .24rem
            margin-top: -.23rem
            margin-right: .5rem
            ellipsis()
          .introduction-footnote
            width: 88%
            color: red
            font-size: .24rem
            margin-top: .5rem
            margin-left: .2rem
            ellipsis()
    .foot
      width: 100%
      height: 0
      padding-bottom: .8rem
      text-align: center
      font-size: .28rem
      line-height: .8rem
      color: #37b8cc

</style>
