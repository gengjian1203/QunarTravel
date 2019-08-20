<template>
  <div class="header">
    <div class="header-title">
      城市选择
    </div>
    <router-link to="/">
      <div class="iconfont header-back">&#xe696;</div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'CityHeader'
}

</script>

<style lang="stylus" scoped>
  @import "~style/varibles.styl"

  .header
    display: relative
    overflow: hidden
    width: 100%
    height: $headerHeight
    background: $BGColor
    .header-title
      line-height: $headerHeight
      font-size: .32rem
      color: #ffffff
      text-align: center
    .header-back
      position: absolute
      top: 0
      left: .1rem
      line-height: $headerHeight
      font-size: .5rem;
      color: #ffffff
</style>
