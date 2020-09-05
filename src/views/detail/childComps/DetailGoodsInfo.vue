<template>
  <div v-if="Object.keys(detailInfo).length">
     <div class="info-desc clear-fix"> 
       <div class="start"></div>
       <div class="desc">{{ detailInfo.desc }}</div>
       <div class="end"></div>
     </div>
     <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
     <div class="info-list">
       <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" 
       :src="item" @load="imgLoad" alt="">
     </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    data () {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    props: {
      detailInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      imgLoad () {
        if (++this.counter == this.imagesLength) {
          this.$emit('imgLoad')
        }
      }
    },
    watch: {
      detailInfo () {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
 
</style>
