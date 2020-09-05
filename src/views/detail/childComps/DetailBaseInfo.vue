<template>
  <div class="base-info" v-if="Object.keys(goods).length">
     <div class="info-title">{{ goods.title }}</div>
     <div class="info-price">
       <span class="n-price">{{ goods.newPrice }}</span>
       <span class="o-price">{{ goods.oldPrice }}</span>
       <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
     </div>
     <div class="info-other">
       <span>{{ goods.columns[0] }}</span>
       <span>{{ goods.columns[1] }}</span>
       <span>{{ goods.services[goods.services.length-1].name }}</span>
     </div>
     <div class="info-service"> 
       <span class="info-service-item" v-for="index in goods.services.length-1" 
       :key="index">
         <img :src="goods.services[index-1].icon" alt="">
         <span>{{ goods.services[index-1].name }}</span>
       </span>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
          type: Object,
          default () {
            return {}
          }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    padding: 0 10px;
  }
  .info-title {
    padding: 10px 0;
    color: #444;
  }
  .info-price {
    padding-bottom: 20px;
  }
  .n-price {
    color: var(--color-height-text);
    font-size: 20px;
    font-weight: 600;
  }
  .o-price {
    font-size: 12px;
    text-decoration: line-through;
    color: #aaa;
    margin-left: 5px;
  }
  .discount {
    background-color: var(--color-height-text);
    color: #fff;
    font-size: 12px;
    padding: 1px 5px;
    border-radius: 10px;
    position: relative;
    bottom: 5px;
  }
  .info-other {
    display: flex;
    font-size: 12px;
    color: #aaa;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .info-other span {
    flex: 1;
    text-align: center;
  }
  .info-other span:first-child {
    text-align: left;
  }
  .info-other span:last-child {
    text-align: right;
  }
  .info-service {
    display: flex;
    padding: 25px 0;
  }
  .info-service-item {
    flex: 1;
    font-size: 14px;
    color: #333;
  }
  .info-service-item img {
    width: 16px;
    vertical-align: -3px;
  }
</style>
