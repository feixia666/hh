<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
        

    </div>
</template>

<script>
export default {
    data(){
        return {
            iconList: [{
                id: '0001',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
                desc: '酒店'
            }, {
                id: '0002',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
                desc: '机票'
            }, {
                id: '0003',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
                desc: '火车票'
            }, {
                id: '0004',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
                desc: '度假'
            }, {
                id: '0005',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                desc: '热门景点'
            }, {
                id: '0006',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
                desc: '酒店'
            }, {
                id: '0007',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
                desc: '机票'
            }, {
                id: '0008',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
                desc: '火车票'
            }, {
                id: '0009',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
                desc: '度假'
            }, {
                id: '0010',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                desc: '热门景点'
            }, {
                id: '0011',
                imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                desc: '热门景点'
            }],
            swiperOption: {
                autoplay: false
            },
        }
    },
    computed: {
        pages() {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 10)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'

.icon >>> .swiper-container{
    height: 0;
    padding-bottom: 50%;
}
.icons{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    margin-top: 0.1rem;
    .icon{
        position: relative;
        overflow: hidden;
        float: left;
        width: 20%;
        height: 0;
        padding-bottom: 25%;
        .icon-img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            box-sizing: border-box;
            padding: 0.1rem;
            .icon-img-content{
                display: block;
                margin: 0 auto;
                width 100%;
                height 100%;
            }
        }
        .icon-desc{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: 0.44rem;
            text-align: center;
            color: $darkTextColor;
            ellipsis()
        }
    }
}
</style>
