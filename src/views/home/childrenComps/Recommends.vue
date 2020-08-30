<template>
  <div class="recomm">
    <div class="recomm-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommends',
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recomm {
    display: flex;
    border-bottom: 8px solid #ddd;
  }
  .recomm-item {
    flex: 1;
    font-size: 12px;
    text-align: center;
    margin: 10px 0 15px;
  }
  a {
    color: #000;
  }
  img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>

