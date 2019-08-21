<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-like :list="likeList"></home-like>
    <home-weekend :list="weekendList"></home-weekend>
    <home-tips></home-tips>
  </div>
</template>

<script>

import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeLike from './components/Like'
import HomeWeekend from './components/Weekend'
import HomeTips from './components/Tips'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconsList: [],
      likeList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // 本地数据
      axios.get('/api/home.json').then(this.getHomeInfoSucc).catch(() => {
        console.log('本地home.json数据未找到，索引github远程数据')
        // 远程github数据
        axios.get('https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/home.json').then(this.getHomeInfoSucc).catch(() => {
          console.log('github远程home.json数据未找到')
        })
      })
    },
    getHomeInfoSucc (res) {
      if (res.data.ret && res.data.data) {
        var data = res.data.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.likeList = data.likeList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeLike,
    HomeWeekend,
    HomeTips
  },
  mounted () {
    this.getHomeInfo()
  }

}
</script>

<style lang="stylus" scoped>

</style>
