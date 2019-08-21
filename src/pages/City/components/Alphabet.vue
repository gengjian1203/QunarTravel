<template>
  <ul class="list">
    <li class="item" v-for="key of arrLetter"
        :key="key"
        :ref="key"
        @click="HandleLetterClick"
        @touchstart="HandleTouchStart"
        @touchmove="HandleTouchMove"
        @touchend="HandleTouchEnd"
    >
        {{key}}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      bTouch: false,
      nStartY: 0,
      timer: null
    }
  },
  updated () {
    this.nStartY = this.$refs['A'][0].offsetTop
  },
  computed: {
    arrLetter () {
      const arr = []
      for (let i in this.cities) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    HandleLetterClick (el) {
      this.$emit('change', el.target.innerText)
    },
    GetLetterEmit (el) {
      if (!this.timer) {
        // 列表滚动时，函数节流
        this.timer = setTimeout(() => {
          const nTouchY = el.touches[0].clientY - 114
          const nIndex = Math.floor((nTouchY - this.nStartY) / 20)
          if (nIndex >= 0 && nIndex <= this.arrLetter.length) {
            this.$emit('change', this.arrLetter[nIndex])
          }
          clearTimeout(this.timer)
          this.timer = null
        }, 16)
      }
    },
    HandleTouchStart (el) {
      this.bTouch = true
      this.GetLetterEmit(el)
    },
    HandleTouchMove (el) {
      if (this.bTouch) {
        this.GetLetterEmit(el)
      }
    },
    HandleTouchEnd (el) {
      this.bTouch = false
    }
  }
}

</script>

<style lang="stylus" scoped>

  @import "~style/varibles.styl"

  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    width: .4rem
    top: 2.28rem
    right: 0
    bottom: 0
    .item
      text-align: center
      line-height: .4rem
      color: $BGColor
</style>
