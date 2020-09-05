<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button :is-checked="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
     <div class="total-price">
        合计：￥{{totalPrice}}
     </div>
     <div class="calculate">
       去计算({{checkLength}})
     </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    methods: {
      checkClick () {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.check = false)
        } else {
          this.cartList.forEach(item => item.check = true)
        }     
      }
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice () {
        return this.cartList.filter(item => {
          return item.check
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength () {
        return this.cartList.filter(item => item.check).length
      },
      isSelectAll () {
        if (this.cartList.length) {
          return !this.cartList.some(item => !item.check)
        } 
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .check-all {
    display: flex;
    width: 60px;
    margin-left: 10px;
  }
  .check-all span {
    margin-left: 5px;
  }
  .total-price {
    margin-left: 30px;
    flex: 1;
  }
  .calculate {
    width: 90px;
    height: 100%;
    background-color: red;
    line-height: 40px;
    color: #fff;
    text-align: center;
  }
</style>
