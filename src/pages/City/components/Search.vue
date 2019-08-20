<template>
  <div class="wrapper">
    <div class="upper">
      <ul class="address">
        <li :class="{'address-child' : true, 'active' : bActive}" @click="HandleAddrInClick">境内</li>
        <li :class="{'address-child' : true, 'active' : !bActive}" @click="HandleAddrOutClick">境外·港澳台</li>
      </ul>
    </div>
    <div class="downer">
      <input class="search-input" type="text" name="" v-model="strSearch" placeholder="请输入城市名或拼音"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CitySearch',
  data () {
    return {
      bActive: true,
      strSearch: ''
    }
  },
  methods: {
    HandleAddrInClick (el) {
      this.bActive = true
    },
    HandleAddrOutClick (el) {
      this.bActive = false
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "~style/varibles.styl"

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
</style>
