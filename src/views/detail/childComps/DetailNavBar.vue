<template>
  <div>
     <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" class="title-item"
        :class="{active:currentIndex == index}" @click="titleIndex(index)">{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    data () {
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleIndex (index) {
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-height-text);
  }
  .back img {
    width: 20px;
    margin-top: 12px;
  }
</style>
