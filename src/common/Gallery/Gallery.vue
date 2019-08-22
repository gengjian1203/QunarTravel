<template>
  <div class="gallery-wrapper" @click="HandleGalleryClick">
    <swiper class="gallert-content" :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="gallery-img">
        <img class="image" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg" alt="故宫">
      </swiper-slide>
      <swiper-slide class="gallery-img">
        <img class="image" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg" alt="故宫">
      </swiper-slide>
      <swiper-slide class="gallery-img">
        <img class="image" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg" alt="故宫">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'CommonGallery',
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
  methods: {
    HandleGalleryClick () {
      this.$emit('close')
    }
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
