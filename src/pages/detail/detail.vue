<template>
    <div>
        <detail-banner :sightName="sightName" 
                       :bannerImg="bannerImg"
                       :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            list: [],
            sightName: '',
            gallaryImgs: [],
            categoryList: [],
            bannerImg: ''
        }
    },
    methods: {
        getDetailInfo(){
            axios.get('/api/detail.json?id=' + this.$route.params.id).then(res => {
                const data = res.data.data
                if (res.data.ret && data) {
                    this.sightName = data.sightName
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                    this.bannerImg = data.bannerImg
                }
            })
        }
    },
    mounted(){
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
.content
        height 50rem
</style>