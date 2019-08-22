<template>
  <div>
    <div class="banner-wrap" @click="HandleBannerClick">
      <img class="banner-img" :src="bannerImg" :alt="sightName">
      <div class="banner-info">
        <div class="banner-name">{{this.sightName}}</div>
        <div class="banner-num">
          <span class="iconfont banner-photo">&#xe67b;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :gallaryImgs="gallaryImgs"
        v-if="bShowGallery"
        @close="HandleGalleryClose"
      >
      </common-gallery>
    </fade-animation>
  </div>
</template>

<script>

import CommonGallery from 'common/Gallery/Gallery'
import FadeAnimation from 'common/FadeAnimation/FadeAnimation'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      bShowGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
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
