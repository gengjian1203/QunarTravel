<template>
  <div class="list" ref="scroll">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <ul class="button-list">
          <li class="button">北京</li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li class="button" v-for="item of hotCities" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll)
  },
  watch: {
    letter () {
      this.scroll.scrollToElement(this.$refs[this.letter][0])
    }
  }
}

</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color: #aaaaaa

  .border-topbottom
    &:before
      border-color: #aaaaaa
    &:after
      border-color: #aaaaaa

  .list
    overflow: hidden
    position: absolute
    top: 2.28rem
    left: 0
    right: 0
    bottom: 0
    .area
      .title
        width: 100%
        height: .48rem
        line-height: .48rem
        color: #666666
        background: #f7f7f7
        padding-left: .2rem
      .button-list
        overflow: hidden
        width: 100%
        padding-left: .2rem
        padding-right: .2rem
        margin: .1rem 0
        .button
          float: left
          width: 25%
          text-align: center
          padding: .1rem
          margin: .1rem .2rem .1rem 0
          border: .01rem solid #cccccc
          border-radius: .06rem
      .item-list
        width: 100%
        .item
          width: 100%
          height: .68rem
          line-height: .68rem
          padding-left: .2rem

</style>
