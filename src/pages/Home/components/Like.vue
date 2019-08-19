<template>
  <div class="wrap">
    <div class="top"></div>
    <div class="title">
      <span class="iconfont icon-heart">&#xe64e;</span>
      猜你喜欢
    </div>
    <ul class="content">
      <li class="item border-bottom" v-for="item of ListIntroduction" :key="item.id">
        <img class="item-img" :src="item.url" :alt="item.strName">
        <div class="introduction">
          <div class="introduction-name">{{item.strName}}</div>
          <div class="introduction-comment">
            <div class="introduction-comment-star">{{strStar(item.nStar)}}</div>
            <div class="introduction-comment-num">{{item.nComment}}条评论</div>
          </div>
          <div class="introduction-price">
            <div class="introduction-price-sign">￥</div>
            <div class="introduction-price-num">{{item.nPrice}}</div>
            起
          </div>
          <div class="introduction-address">{{item.strAddress}}</div>
          <div class="introduction-footnote" v-if="bFootnote(item.strFootnote)">{{item.strFootnote}}</div>
        </div>
      </li>
    </ul>
    <div class="foot border-top">
      查看所有产品
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeLike',
  data () {
    return {
      ListIntroduction: [{
        id: 10000,
        url: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        strName: '北京欢乐谷',
        nStar: 5,
        nComment: 74459,
        nPrice: 195,
        strAddress: '朝阳区',
        strFootnote: '亚洲唯一飞行式过山车等你来挑战，亚洲唯一飞行式过山车等你来挑战'
      }, {
        id: 10001,
        url: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
        strName: '奥林匹克塔',
        nStar: 4,
        nComment: 398,
        nPrice: 121.9,
        strAddress: '朝阳区',
        strFootnote: ''
      }, {
        id: 10002,
        url: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        strName: '故宫',
        nStar: 3,
        nComment: 451040,
        nPrice: 60,
        strAddress: '东城区',
        strFootnote: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: 10003,
        url: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        strName: '八达岭长城',
        nStar: 2,
        nComment: 63351,
        nPrice: 40,
        strAddress: '延庆县',
        strFootnote: '不到长城非好汉'
      }, {
        id: 10004,
        url: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_200x200_fdc48968.jpg',
        strName: '水立方',
        nStar: 1,
        nComment: 10838,
        nPrice: 246,
        strAddress: '奥林匹克公园',
        strFootnote: '重温北京奥运会的辉煌时刻!'
      }, {
        id: 10005,
        url: 'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg',
        strName: '京东石林峡',
        nStar: 5,
        nComment: 2845,
        nPrice: 58,
        strAddress: '平谷区',
        strFootnote: ''
      }]
    }
  },
  computed: {
    strStar () {
      return function (rate) {
        const star = '★★★★★☆☆☆☆☆'
        return star.slice(5 - rate, 10 - rate)
      }
    },
    bFootnote () {
      return function (strFootnote) {
        return (strFootnote !== '')
      }
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
