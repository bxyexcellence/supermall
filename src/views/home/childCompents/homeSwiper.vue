<template>
  <div>
     <Swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="swiperimgLoad"/>
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import { Swiper,SwiperItem } from "components/common/swiper/index.js";
export default {
  name: 'homeSwiper',
  props:{
    banners:{
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
    Swiper,
    SwiperItem
  },
  methods: {
    swiperimgLoad(){
      this.$emit('swiperimgLoad')
    }
  }
}
</script>

<style scoped >
</style>
