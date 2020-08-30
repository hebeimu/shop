<template>
  <div class="tab-control">  
    <div class="tab-control-item" v-for="(item,index) in titles" 
    :class="{active: currentindex == index}" @click="itemClick(index)"> 
      <span>{{ item }}</span>  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabControl',
    data () {
      return {
        currentindex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      itemClick (index) {
        this.currentindex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    background: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-height-text);

  }
  .active span {
    border-bottom: 2px solid var(--color-height-text);
  }
</style>
