<template>
	<view class = "article-list-main-div">
        <view class = "article-list-title-div">
            <p class = "article-list-title">
                <img
                    :src = "articleIcon" 
                    alt="&gt;"
                    class = "article-list-title-icon" 
                />
                <span>最近笔记</span>
            </p>
        </view>
        <view class = "article-list-div">
            <view
                class = "article-list-li"
                v-for = "item in articles" 
                :key = "item.id" 
                @click = "goToArticle(item.id)"
            >
                <p class = "article-list-li-tag">{{item.tagName}}</p>
                <p class = "article-list-li-title">{{item.title.replace("# ", "")}}</p>
                <view class = "article-list-li-introduce" v-html="item.introduce"></view>
            </view>
        </view>
	</view>
</template>

<script>
    import ArticleIcon from '../../../static/article.svg';
	export default {
        data() {
            return {
				articleIcon: ArticleIcon
			}
        },
        props: ['articles'],
        methods: {
            goToArticle(id){
                uni.$emit('navigatorToNote', id);
            }
        }
	}
</script>

<style lang="scss">
.article-list-main-div {
    position: relative;
    width: 100%;
    margin-top: 10rpx;
    justify-content: center;
    align-items: center;
}
.article-list-title-div {
    position: relative;
    width: 90%;
    margin-bottom: 5rpx;
    padding: 10rpx 20rpx;
    margin: 0px 2.5%;
    background-color: $primary-color;
    color: #f2f2f2;
    display: inline-block;

    .article-list-title-icon {
        display: inline-block;
        margin-right: 20rpx;
        width: 28rpx;
        height: 28rpx;
        vertical-align: baseline;
    }
    .article-list-title {
        position: relative;
        font-size: 16px;
        font-weight: normal;
    }
    .article-list-title-arrow {
        position: relative;
        float: right;
    }
}
.article-list-div {
    display: block;
    position: relative;
    width: 100%;
    min-height: 250px;
    overflow: hidden;
    cursor: pointer;

    a {
        color: $secondary-color;
    }

    .article-list-li {
        display: block;
        position: relative;
        left: 0;
        width: 100%;
        padding: 10rpx 0px;
        border-radius: 10rpx;
        width: 95%;
        left: 2.5%;
        border: 1px solid #f2f2f2;
        box-shadow: 0px 2px 5px grey;
        text-align: left;
        background-color: #ffffff;
        
        &:first-child {
            margin-top: 22rpx;
        }
        
        &:not(:last-child) {
            margin-bottom: 22rpx;
        }

        &:last-child {
            margin-bottom: 12rpx;   
        }

        .article-list-li-tag {
            display: inline-block;
            position: relative;
            text-align: center;
            margin: 0px 10px;
            padding: 4rpx 16rpx;
            border-radius: 14rpx;
            font-size: 12px;
            height: 25px;
            line-height: 24px;
            width: auto;
            background-color: $primary-color;
            color: #ffffff;
            font-weight: bold;
        }

        .article-list-li-title {
            position: relative;
            display: inline-block;
            padding-top: 4rpx;
            font-size: 14px;
            font-weight: bold;
            width: calc(100% - 160rpx);
            text-align: right;
            height: 100%;
        }

        .article-list-li-introduce {
            padding: 5rpx 18rpx;
        }
    }
}
</style>
