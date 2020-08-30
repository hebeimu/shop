<template>
  <div id="home">
    <!-- 页头 -->
    <nav-bar class="home-nav"><div slot="center">品优购</div></nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 爆款推荐 -->
    <recommends :recommends="recommends"></recommends>
    <!-- 流行款式 -->
    <fashion-view></fashion-view>
    <!-- 商品展示类别 -->
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"/>
    <!-- 商品展示 -->
    <goods-list :goods="showGoods"></goods-list>
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

  // 网络请求模块
  import {getHomeData,getHomeGoods} from 'network/home'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      Recommends,
      FashionView,
      NavBar,
      TabControl,
      GoodsList
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
        currentType: 'pop'
      }
    },
    created () {
      // 调用网络请求方法
      this.getHomeData()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
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
        })  
      }
    }
  }
</script>

<style scoped>
  #home {
    padding: 44px 0 49px;
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
  .tab-control {
    position: sticky;
    top: 44px;
  }
 
</style>
