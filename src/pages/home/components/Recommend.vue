<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item border-bottom">
                <img class="item-img" src="//gw.alicdn.com/bao/uploaded/i1/16969666/TB2xjEopVXXXXXJXXXXXXXXXXXX_!!16969666.jpg_500x500q90.jpg">
                <div class="item-info">
                    <p class="item-title">长隆海洋世界</p>
                    <p class="item-desc">阿萨德都是发生的广都是发生的广都是发生的广泛的个，阿斯蒂芬个</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title{
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}
.item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img{
        width 1.7rem
        height 1.7rem
        padding .1rem
    }
    .item-info{
        flex 1
        padding .1rem
        min-width 0
        .item-title{
            line-height .54rem
            font-size .32rem
            ellipsis()
        }
        .item-desc{
            line-height .4rem
            color #ccc
            ellipsis()
        }
        .item-button{
            line-height .44rem
            background #ff9300
            padding 0 .2rem
            border-radius .06rem
            margin-top .16rem
            color #fff
        }
    }
}
</style>
