<template>
  <div class="list-wrapper">
    <ul class="list-content" v-for="(item, index) of categoryList" :key="index">
      <li class="list-item border-bottom">
        <span class="list-icon" v-if="bIcon"></span>
        {{item.title}}
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
        width: 70%
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
      .list-child
        padding-left: .4rem
</style>
