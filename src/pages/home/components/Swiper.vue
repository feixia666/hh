<template>
    <swiper class="wrapper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> 
</template>

<script>
export default {
    name: 'HomeSwiper',
    data(){
        return {
            swiperOption: {
                pagination: 'swiper-pagination',
                loop: true,
                autoplay: 3000
            },
            swiperList: [{
                id: '0001',
                imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ac8d6c93f4830b6375d254b42bfae3c.jpg?thumb=1&w=720&h=360'
            }, {
                id: '0002',
                imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ba90e8447fbe9bd14e61794bbda5744.jpg?thumb=1&w=720&h=360'
            }]
        }
    }

}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee
    .swiper-img
      width 100%
</style>
