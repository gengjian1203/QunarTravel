<template>
  <div>
    <div class="tip-line"></div>
    <div class="tip-content">
      <span class="iconfont icon-enter">&#xe602;</span>
      <p class="tip-text">
        <span class="iconfont icon-tip">&#xe60d;</span>
        1.如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！2.故宫博物院2019年延续周一闭馆（国家法定节假日除外）的措施，具体时间请以景区官方通知为准，给您带来不便敬请谅解。
      </p>
    </div>
    <div class="tip-line"></div>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'

  .tip-line
    width: 100%
    height: .2rem
    background: #f5f5f5
  .tip-content
    width: 100%
    height: .88rem
    line-height: .88rem
    background: #fff5e6
    .icon-enter
      position: absolute
      right: .3rem
      color: #c6c6c6
    .tip-text
      width: 86%
      color: #fd8324
      padding-left: .4rem
      ellipsis()
      .icon-tip
        line-height: .4rem
        font-size: .4rem
</style>
