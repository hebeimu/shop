<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <tab-bar>
      <tab-bar-item path='/home' activeColor='red'>
        <img slot='item-icon' src="~assets/img/tabbar/首页.png" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/首页-选中.png" alt="">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/sort' activeColor='red'>
        <img slot='item-icon' src="~assets/img/tabbar/分类.png" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/分类-选中.png" alt="">
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='cart' activeColor='red'>
        <img slot='item-icon' src="~assets/img/tabbar/购物车.png" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/购物车-选中.png" alt="">
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='user' activeColor='red'>
        <img slot='item-icon' src="~assets/img/tabbar/用户.png" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/用户-选中.png" alt="">
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem  
    }
 }
</script>

<style scoped>

 
</style>
