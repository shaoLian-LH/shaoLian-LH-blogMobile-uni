<template>
    <view id = "detail-note-main-div">
        <view 
            class = 'detail-note-title'
            v-html = "articleInfo.title"
        >
        </view>
        <view 
            class = 'detail-note-body' 
            v-html = "articleInfo.content"
        >
        </view>
    </view>
</template>

<script>
    import Empty from '../../../component/empty.vue';
    import timeIcon from '../../../static/time.png';
    import watchIcon from '../../../static/Watch.png';

    export default {
        props: ["detail"],
        data() {
            return {
                articleInfo: {}
            }
        },
        watch: {
            detail: {
                deep: true,
                handler(nvalue, ovalue) {
                    if(nvalue !== ovalue) {
                        let a = nvalue;
                        a.introduce = this.$marked(a.introduce);
                        a.title = this.$marked(a.title);
                        a.content = this.$marked(a.content);
                        this.articleInfo = a;
                        uni.pageScrollTo({
                            scrollTop: 0
                        });
                    }
                }
            }
        }
    } 
</script>

<style lang="scss">
   

</style>