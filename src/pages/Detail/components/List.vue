<template>
  <div class="list-wrapper">
    <ul class="list-content" v-for="(item, index) of categoryList" :key="index">
      <li class="list-item border-bottom">
        <span class="list-icon" v-if="bIcon"></span>
        {{item.title}}
        <div class="list-price" v-if="item.price">
          ￥<span class="list-price-num">{{item.price}}</span><span class="list-price-btn">预订</span>
        </div>
      </li>
      <li class="list-child" v-if="item.children">
        <detail-list :categoryList="item.children" :bIcon="false"></detail-list>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DetailList',
  props: {
    categoryList: Array,
    bIcon: Boolean
  }
}

</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'

  .list-wrapper
    width: 100%
    .list-content
      width: 100%
      .list-item
        box-sizing: border-box
        width: 100%
        max-height: 1.6rem
        line-height: .8rem
        font-size: .32rem
        padding-left: .2rem
        color: #333333
        ellipsis()
        .list-icon
          position: relative
          display: inline-block
          width: .36rem
          height: .36rem
          top: .05rem
          background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
          background-size: .4rem 3rem
        .list-price
          float: right
          padding-right: .4rem
          font-size: .25rem
          color: #fdaa34
          .list-price-num
            font-size: .4rem
          .list-price-btn
            display: inline-block
            width: 1rem
            height: .6rem
            line-height: .6rem
            text-align: center
            color: #ffffff
            border-radius: .1rem
            background: #fdaa34
            margin-left: .2rem
      .list-child
        padding-left: .4rem
</style>
