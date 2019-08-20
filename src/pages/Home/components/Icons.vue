<template>

  <swiper :options="swiperOption" class="wrap">
    <!-- slides -->
    <swiper-slide class="icons" v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

</template>

<script>

export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"

  .wrap >>> .swiper-pagination-bullets
    bottom: .1rem

  .wrap >>> .swiper-pagination-bullet
    width: 6px;
    height: 6px;
    margin: 0 4px;

  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      margin-bottom: -.27rem
      .icon-img
        position: absolute
        top: .15rem
        left: 0
        right: 0
        bottom: .53rem
        box-sizing: border-box
        padding: .05rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto;
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .4rem
        height: .53rem
        text-align: center
        color: $DescColor
        ellipsis()

</style>
