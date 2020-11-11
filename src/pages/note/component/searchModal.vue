<template>
    <view class = "search-modal-main-div">
        <view class = "search-model-wrap">
            <view class = "search-model-title">
                <text>搜索文章</text>
                <icons 
                    class = "close" 
                    type = "close"
                    @click = "closeModal"
                    size = "20" 
                    color = "white"
                />
            </view>
            <view class = "search-model-body">
                <view class = "drop-down-main-menu">
                    <button 
                        class = "drop-down-choice-btn" 
                        @click = "showMenuFunc"
                    >{{choicedTag.tagName}}</button>
                    <ul 
                        class = "drop-down-menu" 
                        v-if = "showMenu"
                    >
                        <li 
                            class = "drop-down-item"
                            v-for = "item in tags" 
                            :key = "item.typeId" 
                            @click = "choiceItem(item)"
                        >{{item.tagName}}</li>
                    </ul>
                    <input
                        :value = "title"
                        maxlength = "20"
                        class = "search-model-input" 
                        type = "text" 
                        placeholder = "尝试查找" 
                        @input = "changeTitle"
                    />
                </view>
            </view>
            <view class = "btn-group">
                <button class = "cancel-btn" @click = "closeModal">取消</button>
                <button class = "ok-btn" @click = "findArticle">查找</button>
            </view>
        </view>
    </view>
</template>

<script>
    import icons from '@/component/uni-icons/uni-icons.vue';
    export default {
        data(){
            return {
                showMenu: false,
                title: ''
            }
        },
        props: ["tags", "choicedTag"],
        components: {
            "icons": icons
        },
        methods: {
            closeModal() {
                uni.$emit('cancel-search');
            },
            showMenuFunc() {
                this.showMenu = !this.showMenu;
            },
            choiceItem(item) {
                uni.$emit('chooceItem', item);
                this.showMenu = false;
            },
            changeTitle(e) {
                this.title = e.detail.value.replace(/\s+/g, "");
            },
            findArticle(){
                uni.$emit('article-search', this.title);
                this.title = '';
            }
        }
    }
</script>

<style lang="scss">
    .search-modal-main-div {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.12);

        .search-model-wrap {
            position: relative;
            display: inline-block;
            width: 95%;
            left: 2.5%;
            top: 220rpx;
            animation: jumpOut ease-out 0.4s;
            border-radius: 6rpx;
            background-color: rgba($color: $primary-color, $alpha: 0.95);
        }

        .search-model-title {
            position: relative;
            display: flex;
            justify-content: space-between;
            background-color: transparent;
            font-size: 14px;
            font-weight: normal;
            padding: 0rpx 30rpx;

            uni-text {
                position: relative;
                display: inline-block;
                padding-top: 10rpx;
                box-sizing: border-box;
                color: #fff;
            }
            .close {
                position: absolute;
                right: 15rpx;
                top: 0rpx;
            }
        }
    }

    .search-model-body{
        position: relative;
        background-color: transparent;
        padding: 20rpx 0px;

        .drop-down-main-menu {
            position: relative;
            width: calc(100% - 60rpx);
            padding: 10rpx 30rpx;
            text-align: left;
            vertical-align: middle;
            

            .drop-down-choice-btn {
                display: inline-block;
                width: 120rpx;
                height: 42rpx;
                line-height: 42rpx;
                margin-right: 20rpx;
                border: none;
                padding: 0;
                font-size: 14px;
                background-color: #fff;
                color: $primary-color;
            }
            .drop-down-menu {
                list-style: none;
                position: absolute;
                z-index: 1000 !important;
                width: 120rpx;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                text-align: center;
                justify-content: center;
                display: flex;
                flex-direction: column;
                animation: fadeIn ease-out 0.4s;

                li {
                    position: relative;
                    width: 100%;
                    display: inline-block;
                    font-size: 12px;
                    background-color:  #fff;
                    color: $primary-color;
                    margin: 0;
                    padding: 8rpx 0rpx;

                    &:hover{
                        background-color: $secondary-color;
                    }
                    &:not(:last-child) {
                        border-bottom: solid 1px $primary-color;
                    }
                }
            }
        }
        .search-model-input {
            display: inline-block;
            width: calc(100% - 144rpx);
            border-radius: 10rpx;
            text-indent: 0.5rem;
            background-color: #fff;
        }
    }

    .btn-group {
        position: relative;
        width: 100%;
        display: block;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        text-align: right;

        button {
            position: relative;
            display: inline-block;
            width: 100rpx;
            font-size: 12px;
            height: 42rpx;
            line-height: 42rpx;
            font-weight: normal;
            border: none;
            margin-right: 30rpx;
        }

        .ok-btn {
            background-color: #fff;
            color: $primary-color;
        }

        .cancel-btn {
            background-color: #fff;
            color: black;
        }
    }

</style>