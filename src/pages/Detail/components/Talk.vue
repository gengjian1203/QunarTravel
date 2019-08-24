<template>
  <div>
    <div class="talk-line"></div>
    <div class="talk-title border-bottom">
      用户评论
    </div>
    <ul v-for="(item, index) of talk" :key="index">
      <li class="talk-item border-bottom">
        <div class="item-head">
          <div class="item-head-left">{{getStar(item.star)}}</div>
          <div class="item-head-right">{{item.author + " " + item.date}}</div>
        </div>
        <div class="item-body">
          {{item.content}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DetailTalk',
  props: {
    talk: Array
  },
  methods: {
    getStar (rate) {
      const str = '★★★★★☆☆☆☆☆'
      const n = Math.floor(parseFloat(rate))
      return str.slice(5 - n, 10 - n)
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'

  .talk-line
    width: 100%
    height: .2rem
    background: #f5f5f5
  .talk-title
    width: 100%
    height: .8rem
    line-height: .8rem
    font-size: .32rem
    padding: 0 .4rem
    &::after
      content: " ";
      position: absolute
      top: .26rem
      left: .2rem
      width: .06rem
      height: .25rem
      background: $BGColor
  .talk-item
    width: 100%
    box-sizing: border-box
    font-size: .25rem
    color: #616161
    line-height: .42rem
    padding: .1rem .2rem .3rem .2rem
    .item-head
      width: 100%
      font-size: .24rem
      padding: .1rem 0
      .item-head-left
        float: left
        color: #ffb436
      .item-head-right
        float: right
        color: #000000
    .item-body
      clear: both
      padding: .1rem 0
</style>
