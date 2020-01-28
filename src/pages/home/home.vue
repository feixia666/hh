<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>

    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    methods: {
        getHomeInfo () {
            axios.get('/static/index.json').then(res => {
                console.log(res)
            })
            axios.get('/api/mock/city.json').then(res => {
                console.log(res)
            })
            axios.get('/static/mock/city.json').then(res => {
                console.log(res)
            })
        }
    },
    mounted () {
        this.getHomeInfo()
    }
        
}
</script>

<style lang="stylus" scoped>

</style>
