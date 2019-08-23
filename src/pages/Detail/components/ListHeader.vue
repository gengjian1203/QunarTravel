<template>
  <div class="listheader-wrapper">
    <div class="listheader-up border-bottom">
      <div class="listheader-up-child border-right">
        <span class="iconfont icon-up-enter">&#xe602;</span>
        <p>
          <span class="txt-score">{{this.star}}</span>
          <span class="txt-level">分&nbsp;&nbsp;&nbsp;&nbsp;{{this.level}}</span>
        </p>
        <p class="txt-child">{{this.nowComment}}条评论&nbsp;&nbsp;{{this.nowStrategy}}条攻略</p>
      </div>
      <div class="listheader-up-child">
        <span class="iconfont icon-up-enter">&#xe602;</span>
        <p class="txt-site">景点简介</p>
        <p class="txt-child">开放时间、贴士</p>
      </div>
    </div>
    <div class="listheader-down">
      <span class="iconfont icon-down-enter">&#xe602;</span>
      <span class="iconfont">&#xe615;</span>
      北京市东城区景山前街4号
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'DetailListHeader',
  computed: {
    ...mapState([
      'nowStar',
      'nowComment',
      'nowStarLevel',
      'nowStrategy'
    ]),
    star () {
      return parseFloat(this.nowStar).toFixed(1)
    },
    level () {
      return this.nowStarLevel[Math.floor(this.star)]
    }
  }
}

</script>

<style lang="stylus" scoped>
  .icon-up-enter
    position: absolute
    top: .3rem
    right: .1rem
    color: #c6c6c6
  .icon-down-enter
    position: absolute
    right: .5rem
    color: #c6c6c6

  .listheader-wrapper
    box-sizing: border-box
    position: relative
    width: 100%
    height: 2rem
    top: -.1rem
    border-radius: .1rem .1rem 0 0
    padding: .1rem .2rem 0 .2rem
    background: #ffffff
    .listheader-up
      width: 100%
      height: 1.12rem
      .listheader-up-child
        position: relative
        float: left
        box-sizing: border-box
        width: 50%
        padding: .2rem
        .txt-score
          line-height: .25rem
          font-size: .46rem
          color: #fd8324
        .txt-level
          line-height: .4rem
          color: #fd8324
        .txt-site
          line-height: .4rem
        .txt-child
          font-size: .24rem
          color: #9e9e9e
    .listheader-down
      position: relative
      width: 100%
      height: .8rem
      line-height: .8rem
      padding: 0 .2rem
</style>
