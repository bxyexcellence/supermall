<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners = "banner"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childCompents/homeSwiper';
import HomeRecommendView from './childCompents/HomeRecommendView';
import FeatureView from './childCompents/FeatureView'

import { getHomeMultidata } from "network/home";
export default {
  name:'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView
  },
  data(){
    return {
      //result:null,
      banner:[],
      recommends:[]
    }
  },
  created () {
    getHomeMultidata().then(res => {
        console.log(res);
        //this.result = res;
        this.banner= res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }
    )
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 4;
}
</style>