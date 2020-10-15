<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavBar';
import detailSwiper from './childComps/detailSwiper'

import { getDetail } from '../../network/detail'
export default {
  name: '',
  data(){
    return {
      iid:null,
      topImages:[]
    }
  },
  components:{
   detailNavBar,
   detailSwiper
  },
  created () {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      console.log(res);
      this.topImages = res.result.itemInfo.topImages 
    })
  }
}
</script>

<style scoped>
</style>
