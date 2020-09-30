<template>
   <div class="tab-bar-item" @click="itemClick">
       <div v-if="!isactive"><slot name="ItemIcon"></slot></div>
       <div v-else><slot name="ItemIconActive"></slot></div>
       <div :style="activeStyle"><slot name="ItemText"></slot></div>
        <!-- <slot></slot> -->
    </div>
</template>
<script>
export default {
    name:"TarBarItem",
    props:{
       path:String,
       activeColor:{
           type:String,
           default:'#ff8198'
       }
    },
    data () {
        return {
            //isactive:true
        }
    },
    computed: {
      isactive(){
          return this.$route.path.includes(this.path)
      },
      activeStyle(){
          return this.isactive?{color:this.activeColor}:{}
      }
    },
    methods: {
       itemClick(){
           this.$router.push(this.path)
           console.log(this.path);
       }
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
}
.tab-bar-item img{
  width:22px;
  height: 22px;
  margin-top: 4px;
  vertical-align: middle;
}
/* .active{
    color: pink;
} */
</style>