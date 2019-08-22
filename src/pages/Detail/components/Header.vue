<template>
  <div class="header-wrapper">
    <router-link tag="div"
                 to="/"
                 class="iconfont header-back icon-back"
                 v-show="!bShowTitle"
    >
      &#xe696;
    </router-link>
    <div class="header-fixed"
         :style="opacityStyle"
         v-show="bShowTitle"
    >
      <router-link to="/"
                   class="iconfont icon-back"
      >
        &#xe696;
      </router-link>
      <div class="header-fixed-title">景区名称</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      bShowTitle: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    HandleScroll () {
      console.log('ssssss')
      let top = document.documentElement.scrollTop ||
                document.body.scrollTop ||
                window.pageYOfset
      if (top > 0) {
        this.bShowTitle = true
        let opacity = top / 200
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.bShowTitle = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.HandleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.HandleScroll)
  }
}

</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'

  .icon-back
    position: absolute
    width: .72rem
    height: .72rem
    top: .1rem
    left: .1rem
    text-align: center
    line-height: .72rem
    font-size: .42rem
    color: #ffffff

  .header-wrapper
    position: absolute
    height: .88rem
    top: 0
    left: 0
    right: 0
    .header-back
      background: rgba(0, 0, 0, 0.6)
      border-radius: .36rem
    .header-fixed
      position: fixed
      width: 100%
      height: .88rem
      top: 0
      left: 0
      right: 0
      background: $BGColor
      .header-fixed-title
        text-align: center
        line-height: .88rem
        font-size: .32rem
        color: #ffffff

</style>
