<template>
  <div class="back-top">
     <img src="~assets/img/common/backtop.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    top: 550px;
    right: 10px;
  }
  .back-top img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
 
</style>
