<template>
  <div class='homepage'>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <img v-lazy="'http://itcgq.com:8080'+ image.imgSrc" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="search">
      <van-search
        label="地址"
        placeholder="请输入小区或地址"
      >
      </van-search>
    </div>

    <van-grid>
      <van-grid-item
        icon="photo-o"
        text="文字"
      />
      <van-grid-item
        icon="photo-o"
        text="文字"
      />
      <van-grid-item
        icon="photo-o"
        text="文字"
      />
      <van-grid-item
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
import { getBanner } from '@/api/homepage'

export default {
  name: 'HomePage',
  components: {
  },
  props: {},
  data () {
    return {
      images: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadBanner()
  },
  mounted () { },
  methods: {
    async loadBanner () {
      try {
        const { data } = await getBanner()
        this.images = data.body
        console.log(this.images)
      } catch (err) {
        this.$toast('加载失败')
      }
    }
  }
}
</script>

<style scoped lang='less'>
.banner {
  width: 375px;
  height: 214px;
  img {
    width: 100%;
  }
}
.van-search {
  z-index: 1;
  position: absolute;
  top: 31.5px;
  left: 14.5px;
  width: 307.5px;
  height: 33.5px;
  padding: 0;
  border-radius: 5px;
  .van-search__content {
    height: 100%;
  }
}
</style>
