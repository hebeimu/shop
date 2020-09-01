<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data () {
      return {
        scroll: null
      }
    },
    props: {
       probeType: {
         type: Number,
         default: 0
       },
       pullUpLoad: {
         type: Boolean,
         default: false
       }
    },
    mounted () {
      this.scroll = new BScroll (this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 把监听滚动位置的事件传出去
      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }
      
      // 监听上拉加载更多
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
      

    },

    
    methods: {
      // 回到顶部
      scrollTo (x, y, time = 300) {
        this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      // 刷新滚动范围
      refresh () {
        this.scroll.refresh && this.scroll.refresh()
      },
      // 释放加载更多事件的占位
      finishPullUp () {
        this.scroll.finishPullUp()
      } 
    }
  }
</script>

<style scoped>
 
</style>
