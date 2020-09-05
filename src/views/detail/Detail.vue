<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="navbar"/>
    <scroll class="wrapper" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommend"/>
    </scroll>
    <!-- 底部购买版块 -->
    <detail-bottom-bar @addCart="addToCart"/>
    <!-- 点击回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
    <!-- 弹窗 -->
    <toast :message="message" :isShow="isShow"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import GoodsList from 'components/content/goods/GoodsList'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import Toast from 'components/common/toast/Toast'

  import scroll from 'components/common/scroll/Scroll'
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'

  // 混入
  import {itemListenerMixin,backTopMixin} from 'common/mixin'

  // 工具
  import {debounce} from 'common/utils'

   // 导入常量
  import {BACK_POSITION} from 'common/const'

  export default {
    name: 'Detail',
    data () {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: [],
        themeTopYs: null,
        currentIndex: 0,
        message: '',
        isShow: false
      }
    },
    mixins: [itemListenerMixin,backTopMixin],
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Toast,
      scroll
    },
    created () {
      // 保存传入的 iid 
      this.iid = this.$route.params.iid
      // 1. 根据 iid 请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result
        // 2. 获取顶部图片轮播数据
        this.topImages = data.itemInfo.topImages
        // 3.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // 4. 获取店铺信息
        this.shop = new Shop(data.shopInfo)
        // 5. 获取商品的详情数据
        this.detailInfo = data.detailInfo
        // 6. 获取商品的参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 7. 获取商品评论信息
         if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {}
        }
        // 8. 获取详情页的推荐商品信息
        getRecommend().then(res => {
          this.recommend = res.data.list
        }) 
      })
    },
    methods: {
      imgLoad () {
        this.$refs.scroll.refresh()

        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
        this.themeTopYs.push(Number.MAX_VALUE)
      },
      // 处理nav-bar组件传过来的点击事件  
      titleClick (index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
      },

      // 处理 scroll 传过来的滚动事件
      contentScroll (position) {
        let positionY = -position.y
        for (let i = 0; i < this.themeTopYs.length - 1; i++) {
          if (this.currentIndex != i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) {
            this.currentIndex = i
            this.$refs.navbar.currentIndex = this.currentIndex
          }
        }

        this.isShowBackTop = positionY > BACK_POSITION
      },
      
      // 添加至购物车
      addToCart () {
        // 1. 获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 2. 将商品添加到购物车
        this.$store.dispatch('addCart', product).then(res => {
          this.message = res
          this.isShow = true
          setTimeout(() => {
            this.isShow = false
          }, 1500)
        })
      }
    },
     
    

    // 离开组件的事件周期函数，前提是被 keep-alive 包裹的组件
    destroyed () {
      this.$bus.$off('itemImageLoad', this.itemImaListener)
    },
    
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 1001;
    background-color: #fff;
    padding: 44px 0 58px;
    height: 100vh;
  }
  .detail-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    background-color: #fff;
  }
  #detail .wrapper {
    height: calc(100%);
  }
</style>