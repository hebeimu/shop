<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.sort"> 
        <a :href="item.link"><img :src="item.image" alt="" @load="ImageLoad"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        isLoad: true
      }
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      ImageLoad () {
        if (this.isLoad) {
          this.$emit('ImageLoad')
          this.isLoad = false
        }
      }
    }
  }
</script>

<style scoped>

 
</style>

