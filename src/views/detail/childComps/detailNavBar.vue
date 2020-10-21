<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">&lt;</div>
      <div slot="center" class="titles">
        <span v-for="(item,index) in titles" 
        :key="index" 
        class="title-item" :class="{active:index === currectIndex}"
        @click="spanClick(index)">{{item}}</span>
      </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: '',
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currectIndex:0
    }
  },
  components:{
    NavBar
  },
  methods: {
    spanClick(i){
      this.currectIndex = i
      this.$emit('navClick', i)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titles{
  display: flex;
  font-size: 14px;
  text-align: center;
}
.title-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back{
  font-size: 32px;
  padding-left: 20px;
  color: var(--color-high-text);
  padding-top: 2px;
}
</style>
