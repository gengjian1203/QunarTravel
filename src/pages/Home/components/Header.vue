<template>
  <div class="home">
    <div class="home-left">
      <div class="iconfont icon-back">&#xe696;</div>
    </div>
    <div class="home-input">
      <span class="iconfont icon-input">&#xe622;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="home-right">
        {{this.nowcity}}
        <span class="iconfont icon-arrow">&#xe636;</span>
      </div>
    </router-link>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['nowcity'])
  }
}

</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .home
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    color: #ffffff
    background: $BGColor
    .home-left
      float: left
      margin: 0px .1rem
      .icon-back
        font-size: .5rem
    .home-input
      flex: 1
      height: .6rem
      line-height: .59rem
      margin: auto .1rem
      padding: 0px .15rem
      color: #dddddd
      background: #ffffff
      border-radius: $borderRadius
      .icon-input
        margin: 0 .03rem
    .home-right
      float: right
      margin-left: .1rem
      margin-right: .28rem
      color: #ffffff
      .icon-arrow
        margin-left: -.04rem
        margin-top: -2rem
        font-size: .24rem

</style>
