<template>
  <div class="home">
    <div class="home-left">
      <div class="iconfont icon-back">&#xe696;</div>
    </div>
    <div class="home-input">
      <span class="iconfont">&#xe622;</span>
      输入城市/景点/游玩主题</div>
    <div class="home-right">
      城市
      <span class="iconfont icon-arrow">&#xe636;</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader'
}

</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .home
    display: flex;
    height: .8rem;
    line-height: .8rem;
    font-size: .3rem;
    color: #ffffff;
    background: $BGcolor;
    .home-left
      float: left;
      margin: 0px .1rem;
      .icon-back
        font-size: .5rem;
    .home-input
      flex: 1;
      height: .5rem;
      line-height: .5rem;
      margin: auto .1rem;
      padding: 0px .1rem;
      color: #cccccc;
      background: #ffffff;
      border-radius: 0.1rem;
    .home-right
      float: right;
      margin: 0px .2rem;
      .icon-arrow
        margin-left: -.04rem;
        font-size: .24rem;

</style>
