<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
BScroll.use(PullUp);

export default {
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUp:{
      type:Boolean,
      default:false
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
    //BScroll.use(Pullup)
  },
  mounted () {
    
    console.log(this.pullUp);
    this.init()
    setTimeout(()=>{
      this.scroll.refresh();
    },500)
    
  },
  beforeDestroy() {
    this.scroll.destroy()
  },
  methods: {
    init(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad:this.pullUp,
        click: true,
        scrollY: true
        
      })
      if(this.probeType == 2|| this.probeType == 3){
        this.scroll.on('scroll', position =>{
        //console.log(position);
        this.$emit('scroll',position)
      })
      }
      
      if(this.pullUp){
        this.scroll.on('pullingUp', () => {
        console.log(1);
        this.$emit('pullingUp')
      })
      }
      
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
