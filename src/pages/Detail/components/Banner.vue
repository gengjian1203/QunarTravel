<template>
  <div>
    <div class="banner-wrap" @click="HandleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
      <div class="banner-info">
        <div class="banner-name">故宫(AAAAA景区)</div>
        <div class="banner-num">
          <span class="iconfont banner-photo">&#xe67b;</span>
          11
        </div>
      </div>
    </div>
    <common-gallery v-show="bShowGallery" @close="HandleGalleryClose"></common-gallery>
  </div>
</template>

<script>

import CommonGallery from 'common/Gallery/Gallery'

export default {
  name: 'DetailBanner',
  data () {
    return {
      bShowGallery: false
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    HandleBannerClick () {
      this.bShowGallery = true
    },
    HandleGalleryClose () {
      this.bShowGallery = false
    }
  }
}

</script>

<style lang="stylus" scoped>
  .banner-wrap
    overflow: hidden
    position: relative
    width: 100%
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .6rem
      background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
      .banner-name
        position: absolute
        width: 100%
        left: .2rem
        right: 0
        bottom: .38rem
        color: #ffffff
        font-size: .36rem
      .banner-num
        position: absolute
        width: 1.2rem
        height: .4rem
        left: .2rem
        bottom: .86rem
        background: rgba(0, 0, 0, .5)
        border-radius: .2rem
        color: #ffffff
        line-height: .4rem
        font-size: .24rem
        text-align: center
        .banner-photo
          font-size: .26rem

</style>
