<template>
  <div>
    <swiper class="detailswiper">
      <swiper-item v-for="(item,index) in topImages" :key="index" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: '',
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {

    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.detailswiper{
  height: 300px;
}
</style>
