<template>
  <div class="wrapper">
    <div class="upper">
      <ul class="address">
        <li :class="{'address-child' : true, 'active' : bActive}" @click="HandleAddrInClick">境内</li>
        <li :class="{'address-child' : true, 'active' : !bActive}" @click="HandleAddrOutClick">境外·港澳台</li>
      </ul>
    </div>
    <div class="downer">
      <input class="search-input"
             type="text"
             name=""
             v-model="strSearch"
             placeholder="请输入城市名或拼音"/>
    </div>
    <div class="search-wrapper" ref="scroll" v-show="strSearch">
      <ul class="search-content">
        <li class="search-item border-bottom"
            v-for="(item, index) of listResult"
            :key="index">
            {{item}}
        </li>
        <li class="search-item border-bottom" v-show="bShowMatch">
          没有找到符合要求的地名
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      bActive: true,
      strSearch: '',
      listResult: [],
      timer: null
    }
  },
  computed: {
    bShowMatch () {
      return !this.listResult.length
    }
  },
  methods: {
    HandleAddrInClick (el) {
      this.bActive = true
    },
    HandleAddrOutClick (el) {
      this.bActive = false
    }
  },
  watch: {
    strSearch () {
      // 函数节流
      if (!this.timer) {
        setTimeout(() => {
          const list = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if ((value.spell.indexOf(this.strSearch) > -1) ||
                  (value.name.indexOf(this.strSearch) > -1)) {
                list.push(value.name)
              }
            })
          }
          this.listResult = list
          // 重置定时器
          clearTimeout(this.timer)
          this.timer = null
        }, 100)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll)
  }
}

</script>

<style lang="stylus" scoped>
  @import "~style/varibles.styl"

  .border-bottom
    &:before
      border-color: #aaaaaa

  .wrapper
    background: $BGColor
    .upper
      width: 100%
      height: .6rem
      .address
        width: 73%
        height: .4rem
        border: 1px solid #ffffff
        border-radius: .05rem
        color: #ffffff
        background: $BGColor
        margin: 0 auto
      .active
        color: $BGColor
        background: #ffffff
      .address-child
        float: left
        width: 50%
        height: 100%
        line-height: .4rem
        text-align: center
    .downer
      width: 100%
      height: .8rem
      line-height: .8rem
      text-align: center
      .search-input
        box-sizing: border-box
        width: 95%
        height: .6rem
        text-align: center
        border-radius: $borderRadius
        padding: 0 .2rem
    .search-wrapper
      overflow: hidden
      position: absolute
      z-index: 1
      width: 100%
      top: 114px
      left: 0
      right: 0
      bottom: 0
      background: #ffffff
      .search-content
        .search-item
          height: .68rem
          line-height: .68rem
          padding-left: .2rem
</style>
