<template>
  <div class="recommend">
   <home-recommend-item v-for="(item,index) in recommends" :key="index" :item = "item"></home-recommend-item>
  </div>
</template>

<script>
import HomeRecommendItem from './HomeRecommendItem/HomeRecommendItem'
export default {
  name: 'HomeRecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  components: {
    HomeRecommendItem
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  width: 100%;
  padding: 10px 0 30px;
  border-bottom: 8px solid #eee;
}

</style>
