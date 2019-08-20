<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
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
