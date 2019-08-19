<template>

  <swiper :options="swiperOption" class="wrap">
    <!-- slides -->
    <swiper-slide class="icons" v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.url" :alt="item.desc">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      ListUrl: [{
        id: 10000,
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票景点门票景点门票景点门票'
      }, {
        id: 10001,
        url: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: 10002,
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '当地必游'
      }, {
        id: 10003,
        url: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '水上乐园'
      }, {
        id: 10004,
        url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: 10005,
        url: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }, {
        id: 10006,
        url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: 10007,
        url: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        desc: '奥林匹克塔'
      }, {
        id: 10008,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
        desc: '世园会'
      }, {
        id: 10009,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png',
        desc: '文惠券'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.ListUrl.forEach((item, index) => {
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
    bottom: -.06rem

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
        font-size: .28rem
        text-align: center
        color: $DescColor
        ellipsis()

</style>
