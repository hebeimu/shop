import {debounce} from './utils'
export const itemListenerMixin = {
  data () {
    return {
      itemImaListener: null
    }
  },
  mounted() {
    // 监听 GoodsListItem 中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.itemImaListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImaListener)
  }
}


import BackTop from 'components/content/backTop/BackTop'
export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}