<template>
  <div class="gallery-wrapper" @click="HandleGalleryClick">
    <swiper class="gallert-content" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="gallery-img" v-for="(item, index) of gallaryImgs" :key="index">
        <img class="image" :src="item" :alt="'image_' + index">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'CommonGallery',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    HandleGalleryClick () {
      this.$emit('close')
    }
  },
  mounted () {
    this.swiper.slideTo(0)
  }
}

</script>

<style lang="stylus" scoped>
  .gallery-wrapper >>> .swiper-container
    overflow: inherit

  .gallery-wrapper
    display: flex
    z-index: 99
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000000
    .gallert-content
      width: 100%
      height: 0
      padding-bottom: 66.5%
      .gallery-img
        .image
          width: 100%
    .swiper-pagination
      color: #ffffff
      bottom: -3.5rem
</style>
