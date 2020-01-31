<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>

    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    computed: {
        ...mapState(['city'])
    },
    data () {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city).then(res => {
                if(res.data.ret && res.data.data) {
                    this.swiperList = res.data.data.swiperList;
                    this.iconList = res.data.data.iconList
                    this.recommendList = res.data.data.recommendList
                    this.weekendList = res.data.data.weekendList
                }
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
