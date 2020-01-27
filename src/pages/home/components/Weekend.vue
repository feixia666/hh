<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom">
                <div class="item-img-wrapper">
                    <img class="item-img" src="//gw.alicdn.com/bao/uploaded/i1/16969666/TB2xjEopVXXXXXJXXXXXXXXXXXX_!!16969666.jpg_500x500q90.jpg">
                </div>
                <div class="item-info">
                    <p class="item-title">长隆海洋世界</p>
                    <p class="item-desc">阿萨德都是发生的广都是发生的广都是发生的广泛的个，阿斯蒂芬个</p>
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
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}
.item-img-wrapper{
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img{
        width 100%
    }
}
.item-info{
    padding .1rem
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
}

</style>
