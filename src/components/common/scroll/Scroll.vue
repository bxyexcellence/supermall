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
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
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
        probeType: this.probeType,
        click: true,
        scrollY: true
      })
      this.scroll.on('scroll', position =>{
        //console.log(position);
        this.$emit('scroll',position)
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
