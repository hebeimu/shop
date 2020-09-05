<template>
  <div id="home">
    <!-- 页头 -->
    <nav-bar class="home-nav"><div slot="center">品优购</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']"  @tabClick="tabClick" ref="tabControls" v-show="isShow"/>
    <scroll class="wrappers" ref="scroll" :probeType="3" 
    @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @ImageLoad="ImageLoad"/>
      <!-- 爆款推荐 -->
      <recommends :recommends="recommends"/>
      <!-- 流行款式 -->
      <fashion-view></fashion-view>
      <!-- 商品展示类别 -->
      <tab-control :titles="['流行','新款','精选']"  @tabClick="tabClick" ref="tabControl" v-show="!isShow"/>
      <!-- 商品展示 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 点击回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  // 首页子组件 
  import HomeSwiper from './childrenComps/HomeSwiper'
  import Recommends from './childrenComps/Recommends'
  import FashionView from './childrenComps/FashionView'

  // 首页公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  

  // 网络请求模块
  import {getHomeData,getHomeGoods} from 'network/home'

  // 混入模块
  import {itemListenerMixin,backTopMixin} from 'common/mixin' 

  // 导入常量
  import {BACK_POSITION} from 'common/const'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      Recommends,
      FashionView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    data () {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0,list: []},
          sell: {page: 0,list: []},
        },
        currentType: 'pop',
        taboffsetTop: 0,
        isShow: false
      }
    },
    mixins: [itemListenerMixin,backTopMixin],
    created () {
      // 调用网络请求方法,请求商品数据
      this.getHomeData()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },

    // 离开组件的事件周期函数，前提是被 keep-alive 包裹的组件
    deactivated () {
      this.$bus.$off('itemImageLoad', this.itemImaListener)
    },
    computed: {
      showGoods () {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 事件方法
       */
      // 处理商品展示类别组件传过来的自定义事件
      tabClick (index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl.currentindex = index
        this.$refs.tabControls.currentindex = index
      },
     
      // 监测页面滚动
      contentScroll (position) {
        this.isShowBackTop = Math.abs(position.y) >= BACK_POSITION
        
        this.isShow = Math.abs(position.y) >= this.taboffsetTop - 44
      },
      // 上拉加载更多
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      // 检测轮播图加载完成，获取吸顶导航距离顶部距离
      ImageLoad () {
        this.taboffsetTop = this.$refs.tabControl.$el.offsetTop
      },

      /**
       * 网络请求相关的方法
       */
      // 获取首页的轮播图和爆款推荐数据
      getHomeData () {
        getHomeData().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      // 获取商品展示的数据
      getHomeGoods (type) {
        const page = this.goods[type].page + 1
        getHomeGoods (type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })  
      }
    }
  }
</script>

<style scoped>
  #home {
    padding: 44px 0 49px;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
  }
  .wrappers { 
    height: calc(100%);
    overflow: hidden;
  } 
</style>
