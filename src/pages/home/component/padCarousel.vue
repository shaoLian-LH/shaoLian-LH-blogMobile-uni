<template>
	<view class = "carousel-main-div">
        <swiper
			indicator-dots 
			circular 
            autoplay
		>
			<swiper-item 
				v-for = "banner in banners"
				:key = "banner.id" 
                @click = "goToArticle(banner.articleId)"
			>
				<view
                    :key = "banner.articleId" 
                    class = "carousel-banner-div"
                >
                    <img 
                        class = "carousel-banner-img" 
                        :src = "'http://shaolianblog.oss-cn-hangzhou.aliyuncs.com/blog/article/'+banner.imgName" 
                        alt = "?"
                    />
                    <p class = "carousel-banner-p">{{banner.title}}</p>                                
                </view>
			</swiper-item>
		</swiper>
    </view>
</template>

<script>
	export default {
        props: ['banners'],
        methods: {
            goToArticle(id){
                uni.$emit('navigatorToNote', id);
            }
        }
	}
</script>

<style lang="scss">
	.carousel-main-div {
        position: relative;
        width: 100%;
        z-index: 996 !important;
        
        uni-swiper {
            padding: 14rpx 20rpx;
            margin-top: 20rpx;
            overflow: hidden;
            height: 340rpx;
        }
    }
    .carousel-banner-div {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            position: relative;
            width: 100%;
            height: 340rpx;
        }

        .carousel-banner-p{
            display: block;
            position: absolute;
            height: 25px;
            margin: 0;
            width: auto;
            left: 12rpx;
            bottom: 36rpx;
            z-index: 999;
            padding: 2px 8px;
            font-size: 12px;
            border-radius: 12rpx;
            background-image: linear-gradient( rgba(0,0,0,0.45), rgba(0,0,0,0.35), rgba(0,0,0,0.35), rgba(0,0,0,0.45) );
            color: white;
            font: bold 16px/25px Arial, Helvetica, sans-serif;
        }
    }
</style>
