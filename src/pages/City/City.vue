<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities"
               :cities="cities"
               :letter="letter"
    >
    </city-list>
    <city-alphabet :cities="cities"
                   @change="HandleLetterChange"
    >
    </city-alphabet>
  </div>
</template>

<script>

import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      // 本地数据
      axios.get('/api/city.json').then(this.getCityInfoSucc).catch(() => {
        console.log('本地city.json数据未找到，索引github远程数据')
        // 远程github数据
        axios.get('https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/city.json').then(this.getCityInfoSucc).catch(() => {
          console.log('github远程city.json数据未找到')
        })
      })
    },
    getCityInfoSucc (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    HandleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
