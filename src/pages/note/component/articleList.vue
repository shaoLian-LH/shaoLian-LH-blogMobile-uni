<template>
  <view class="article-item-main-view">
    <view
      :hidden="articleList.length === 0"
      v-for="(item, index) in articleList"
      :key="item.id"
      class="article-item-view"
      @click="goToArticle(item.id)"
    >
      <view class="article-item-wrap-view">
        <view class="note-title-view">
          <p class="note-title" v-html="item.title"></p>
        </view>
        <div class="note-icon-view">
          <text class="note-tag">{{ item.tagName }}</text>
          <p class="note-icon-text">
            <image :src="timeIcon" alt="time" /> {{ item.addTime }}
          </p>
          <p class="note-icon-text">
            <image class="note-icon-watch" :src="watchIcon" alt="view" />
            {{ item.fire }}
          </p>
        </div>
        <view class="note-introduce-view">
          <view class="note-introduce" v-html="item.introduce"></view>
        </view>
      </view>
    </view>
    <empty
      v-if="articleList.length === 0"
      emptyTitle="作者懒到没有写过类似文章"
    />
  </view>
</template>

<script>
import Empty from "@/component/empty.vue";
import watchIcon from "@/static/Watch.png";
import timeIcon from "@/static/time.png";

export default {
  props: ["articles"],
  watch: {
    articles: {
      deep: true,
      handler(nvalue, ovalue) {
        if (nvalue.length === 0) {
          this.articleList = [];
          return;
        }
        if (nvalue !== ovalue) {
          let articleList = this.articleList;
          for (let i = 0; i < nvalue.length; i++) {
            let item = nvalue[i];
            item.introduce = this.$marked(item.introduce);
            item.title = item.title.replace(/\s+/g, "").replace(/#+/g, "");
            articleList.push(item);
          }
          this.articleList = articleList;
        }
      },
    },
  },
  components: {
    empty: Empty,
  },
  data() {
    return {
      articleList: [],
      watchIcon: watchIcon,
      timeIcon: timeIcon,
    };
  },
  methods: {
    goToArticle(id) {
      uni.$emit("navigatorToNote", id);
    },
  },
};
</script>

<style lang="scss">
.article-item-main-view {
  margin-top: 25rpx;
  position: relative;
  width: 100%;
  overflow: scroll;
  padding: 0px 35rpx;
  background-color: $main-background-color;

  .article-item-view {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 22rpx;
    border: solid 1px transparent;
    border-radius: 10rpx;
    transition: all ease-out 0.8s;
    &:not(:nth-child(odd)) {
      margin-right: 2.5%;
    }
  }

  .article-item-wrap-view {
    position: relative;
    margin: 5rpx 10rpx;
    padding-bottom: 5rpx;
    box-sizing: border-box;
    box-shadow: $commone-shadow;
    border-radius: 20rpx;
    transition: $short-transition;

    &:hover,
    &:active {
      box-shadow: $hover-shadow;
    }

    .note-title-view {
      position: relative;
      vertical-align: top;

      .note-title {
        position: relative;
        display: inline-block;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        font-family: $sl-font-family;
        color: #444;
      }
    }

    .note-introduce-view {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      padding: 12rpx 20rpx;
      font-size: 14px;
      text-indent: 1.5rem;
      margin-bottom: 30rpx;

      .note-introduce {
        position: relative;
        width: 100%;
        color: #555;
        font-weight: normal;
      }
    }

    .note-icon-view {
      text-align: center;
      margin: 20rpx 0px;
      font-family: $sl-font-family;

      .note-tag {
        display: inline-block;
        width: auto;
        max-width: 80rpx;
        font-size: 12px;
        padding: 8rpx 14rpx;
        border-radius: 12rpx;
        color: #f2f2f2;
        background-color: $primary-color;
        margin-right: 20rpx;
      }

      .note-icon-text {
        display: inline-block;
        width: auto;
        font-size: 14px;
        font-weight: normal;
        margin-right: 18rpx;

        uni-image {
          width: 30rpx;
          height: 30rpx;
          vertical-align: middle;
          margin-right: 20rpx;
        }

        .note-icon-watch {
          width: 38rpx;
        }
      }
    }
  }

  .spread-line {
    display: inline-block;
    font-size: 12px;
    width: calc(100% - 60rpx);
    text-align: center;
    margin: 0px 30rpx;
    border: dashed 1px #555;
  }
}
</style>
