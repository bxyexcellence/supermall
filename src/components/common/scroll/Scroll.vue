<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
export default {
  name: 'Scroll',
  data(){
    return {
      //scroll:null
    }
  },
  components:{

  },
  created () {
    
  },
  mounted () {
    
    setTimeout(()=>{
      //this.scroll.refresh();
      this.init()
    },500)
    
  },
  beforeDestroy() {
    this.scroll.destroy()
  },
  methods: {
    init(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: 3,
        click: true,
        scrollY: true
      })
    }
  }
}
</script>

<style scoped>
/* .wrapper{
  height: 600px;
  overflow: hidden;
} */
</style>
