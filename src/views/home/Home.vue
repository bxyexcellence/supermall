<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners = "banner"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view class="feature"></feature-view>
    <tab-control 
    :title="titles" 
    class="tab-control"
    @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>

import HomeSwiper from './childCompents/homeSwiper';
import HomeRecommendView from './childCompents/HomeRecommendView';
import FeatureView from './childCompents/FeatureView';
import GoodsList from 'components/content/goods/GoodsList';

import NavBar from 'components/common/navbar/NavBar';
import tabControl from 'components/content/tabControl/tabControl'

import { getHomeMultidata,getHomeGoods } from "network/home";
export default {
  name:'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    tabControl,
    GoodsList
  },
  data(){
    return {
      //result:null,
      banner:[],
      recommends:[],
      titles:['流行','新款','精选'],
      goods:{
        'pop':{'page': 0, 'list':[]},
        'new':{'page': 0, 'list':[]},
        'sell':{'page': 0, 'list':[]}
      },
      currentType:'pop'
    }
  },
  created () {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //事件相关
    tabClick(i){
      console.log(i);
      /* switch (i) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell'
      } */
      this.currentType = Object.keys(this.goods)[i]
    },
    //网络请求
     getHomeMultidata(){
        getHomeMultidata().then(res => {
        console.log(res);
        //this.result = res;
        this.banner= res.data.banner.list;
        this.recommends = res.data.recommend.list;
          }
        )
      },
      getHomeGoods(type){
        const page = this.goods[type].page +1;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page+=1;
        })
      }
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
.tab-control{
  position: sticky;
  top: 44px;
}
</style>