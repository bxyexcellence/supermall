<template>
     <div class="recommend-item">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
      </a>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommendItem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.recommend-item{
  flex: 1;
}
.recommend-item img{
  /* height: 65px;
  width: 65px; */
  width: auto;
  height: auto;
  max-width: 85%;
  margin-bottom: 10px;
}
</style>
