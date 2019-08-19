<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide  v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" alt="Banner" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperList: [{
        id: 100000,
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/01c95889ea184ed8122d1bb3abe8b3de.jpg_750x200_d814b24f.jpg'
      }, {
        id: 100001,
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
      }, {
        id: 100002,
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
      }],
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
