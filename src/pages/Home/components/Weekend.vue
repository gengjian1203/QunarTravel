<template>
  <div class="wrap">
    <div class="title">周末去哪儿</div>
    <ul class="content">
      <li class="item" v-for="item of ListWeekend" :key="item.id">
        <img class="item-img" :src="item.url" :alt="item.name">
        <div class="name">{{item.name}}</div>
        <div class="introduction">{{item.introduction}}</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeWeekend',
  data () {
    return {
      ListWeekend: [{
        id: 10000,
        url: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        name: '京城周末撒欢',
        introduction: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: 10001,
        url: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        name: '京城溜娃必去',
        introduction: '德智体美劳全面发展的亲子日，这些地方该去看看看吧'
      }, {
        id: 10002,
        url: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        name: '帝都必打卡',
        introduction: '来北京必去的景点非这些地方莫属'
      }, {
        id: 10003,
        url: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
        name: '漂流勇进，烧烤露营',
        introduction: '轻松水上漂，任我乐逍遥'
      }, {
        id: 10004,
        url: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        name: '北京清凉避暑胜地',
        introduction: '到大自然中享受“天然空调”的清凉'
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "~style/mixins.styl"

  .wrap
    background: #f5f5f5
    .title
      width: 100%
      height: 0
      padding-bottom: .8rem
      line-height: .8rem
      padding-left: .25rem
    .content
      width: 100%
      .item
        width: 100%
        height: 50%
        margin-bottom: .2rem
        background: #ffffff
        .item-img
          width: 100%
          height: 33.3%
        .name
          margin-top: .3rem
          margin-left: .2rem
        .introduction
          width: 75%
          margin-top: .15rem
          margin-left: .2rem
          font-size: .24rem
          color: #616161
          ellipsis()
</style>
