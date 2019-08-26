<template>
  <div>
    <detail-header
      :sightName="sightName"
    >
    </detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-list-header></detail-list-header>
    <detail-list-tip></detail-list-tip>
    <detail-list :categoryList="categoryList" :bIcon="true"></detail-list>
    <detail-talk :talk="talk"></detail-talk>
  </div>
</template>

<script>

import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailListHeader from './components/ListHeader'
import DetailListTip from './components/ListTip'
import DetailList from './components/List'
import DetailTalk from './components/Talk'
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      talk: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailListHeader,
    DetailListTip,
    DetailList,
    DetailTalk
  },
  methods: {
    getDetailInfo () {
      // 本地数据
      // axios.get('/api/detail.json', {
      //   params: {
      //     id: this.$route.params.id
      //   }
      // }).then(this.getDetailInfoSucc).catch(() => {
      //   console.log('本地detail.json数据未找到，请求github远程数据')
      // })
      // 远程github数据
      axios.get('https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc).catch(() => {
        console.log('github远程home.json数据未找到')
      })
    },
    getDetailInfoSucc (r) {
      const res = r.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
        this.talk = data.talk
      }
    }
  },
  activated () {
    this.getDetailInfo()
  }
}

</script>

<style lang="stylus" scoped>
  .content
    width: 100%
    height: 50rem

</style>
