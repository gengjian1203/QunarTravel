<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="bShow">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <router-link :to="'/detail/' + item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票"/>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 循环滚动
        loop: true,
        // 自动轮播2s/图
        autoplay: 2000,
        // 点击Banner后仍能自动轮播
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    bShow () {
      return this.list.length
    }
  }
}

</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet
    width: 6px;
    height: 6px;
    margin: 0 4px;

  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff;

  .wrapper >>> .swiper-pagination-bullets
    bottom: .1rem

  .wrapper
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.66%;
    .swiper-img
      width: 100%;
</style>
