<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" 
    :key="index" class="tab-control-item" 
    @click="itemClick(index)">
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  components:{

  },
  methods: {
    itemClick(i){
      this.currentIndex = i;
      this.$emit('tabClick',i);
    }
  }
}
</script>

<style scoped>
.tab-control{
  background-color: #fff;
  margin-top: 3px;
  display: flex;
  text-align: center;
  font-size: 15px;
  z-index: 4;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span{
  padding: 5px;
}
 .active {
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-high-text);
  }
</style>
