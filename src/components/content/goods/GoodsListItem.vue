<template>
  <div class="goods-item" @click="itemClick">
     <img :src="showImage" alt="" @load="itemImageLoad">
     <div class="goods-info">
       <p>{{ goodsItem.title }}</p>
       <span class="price">{{ goodsItem.price }}</span>
       <span class="collect">{{ goodsItem.cfav }}</span>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      itemImageLoad () {
          this.$bus.$emit('itemImageLoad') 
      },
      itemClick () {
        this.$router.push('/detail/' + this.goodsItem.iid)
      },
    },
    computed: {
      showImage () {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 4px;
    vertical-align: middle;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .goods-info p{
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-height-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
    color: #777;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 13px;
    height: 13px;
    background: url("~assets/img/common/collect.svg")0 0/13px 13px;
  }
 
</style>
