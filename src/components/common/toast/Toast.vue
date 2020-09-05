<template>
  <div class="toast" v-show="isShow">
     <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    props: {
      message: {
        type: String,
        defaule: ''
      },
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    padding: 5px 8px;
    transform: translate(-50%, -50%);
  }
 
</style>
