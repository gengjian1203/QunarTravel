<template>
  <div class="wrap">
    <div class="title">周末去哪儿</div>
    <ul class="content">
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.desc">
        <div class="name">{{item.desc}}</div>
        <div class="introduction">{{item.introduction}}</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}

</script>

<style lang="stylus" scoped>
  @import "~style/mixins.styl"

  .wrap
    background: #f5f5f5
    .title
      width: 100%
      height: 0
      padding-bottom: .8rem
      line-height: .8rem
      padding-left: .25rem
    .content
      width: 100%
      .item
        width: 100%
        height: 50%
        margin-bottom: .2rem
        background: #ffffff
        .item-img
          width: 100%
          height: 33.3%
        .name
          margin-top: .3rem
          margin-left: .2rem
        .introduction
          width: 75%
          margin-top: .15rem
          margin-left: .2rem
          font-size: .24rem
          color: #616161
          ellipsis()
</style>
