<template>
  <div class="content" v-show="bShow">
    请稍等片刻，图片马上就加载出来啦~
  </div>
</template>

<script>

export default {
  name: 'HomeTips',
  data () {
    return {
      bShow: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.bShow = false
    }, 5000)
  }
}

</script>

<style lang="stylus" scoped>

  .content
    position: absolute
    top: .88rem
    left: 0
    right: 0
    width: 100%
    height: .88rem
    line-height: .88rem
    text-align: center
    color: #ffffff
    background: #666666
    opacity: 0.9

</style>
