<template>
  <div class="wrapper">
    
    <ul>
      <button @click="btnClick">按钮</button>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
      <li>利与弊</li>
    </ul>      
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Sort',
    data () {
      return {
        scroll: null
      }
    },
    mounted () {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType: 3,
        pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {
        // console.log(position)
      })

      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多')
        setTimeout ( () => {
          this.scroll.finishPullUp()
        }, 2000)
        
      })

    },
    methods: {
      btnClick () {
        console.log('哈哈')
      }
    }
  }
</script>

<style scoped>
  div {
    height: 200px;
    background-color: red;
    /* overflow-y: auto; */
  }
 
</style>
