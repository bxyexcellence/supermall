<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control 
          :title="titles" 
          @tabClick="tabClick"
          class="tabcontrol"
          v-show="topCheck"
          ref="tabcontrol2"
          ></tab-control>
    <Scroll class="content" 
            ref="Scroll" 
            :probeType="probeType" 
            @scroll="scrollPosition" 
            :pullUp="pullUpload"
            @pullingUp="loadMore">
      <home-swiper :banners = "banner" @swiperimgLoad.once="swiperimgLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view class="feature"></feature-view>
      <tab-control 
          :title="titles" 
          @tabClick="tabClick"
          ref="tabcontrol1"
          ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

import HomeSwiper from './childCompents/homeSwiper';
import HomeRecommendView from './childCompents/HomeRecommendView';
import FeatureView from './childCompents/FeatureView';
import GoodsList from 'components/content/goods/GoodsList';

import NavBar from 'components/common/navbar/NavBar';
import tabControl from 'components/content/tabControl/tabControl';
import BackTop from 'components/content/backTop/BackTop';
import Scroll from 'components/common/scroll/Scroll';

import { getHomeMultidata,getHomeGoods } from "network/home";
export default {
  name:'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    tabControl,
    GoodsList,
    Scroll,
    BackTop
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
      currentType:'pop',
      probeType:3,
      isShowBackTop:false,
      pullUpload:true,
      tabControloffsetTop:0,
      topCheck:false,
      saveY:0
    }
  },
  created () {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  /*  this.$bus.$on('goodsImgLoadEvent',()=>{
      this.$refs.Scroll&&this.$refs.Scroll.scroll.refresh();
    }) */

  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  mounted () {
    //const refresh = this.debounce(this.$refs.Scroll&&this.$refs.Scroll.scroll.refresh)
    this.$bus.$on('goodsImgLoadEvent',()=>{
      this.$refs.Scroll&&this.$refs.Scroll.scroll.refresh();
      //refresh();
    })
  },
  /* activated() {
    console.log(this.saveY);
    this.$refs.Scroll.scroll.scrollTo(0,this.saveY,0)
    this.$refs.Scroll.scroll.refresh();
  },
  deactivated () {
    //this.saveY = this.$refs.Scroll.scroll.position
    console.log(this.$refs.Scroll.scroll.position);
  }, */
  methods: {
    /* debounce(func,delay){
      let timer = null
      return function() {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this)
        }, delay)
      }
    }, */
    //事件相关
    tabClick(i){
      //console.log(i);
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
      this.$refs.tabcontrol1.currentIndex = i;
      this.$refs.tabcontrol2.currentIndex = i;
      console.log( this.currentType);
      setTimeout(() => {
        this.$refs.Scroll.scroll.refresh();
      }, 500);
    },
    backClick(){
      this.$refs.Scroll.scroll.scrollTo(0,0,500)
      //console.log(this.$refs.Scroll);
    },
    scrollPosition(position){
      //console.log(position);
      position.y<-1000?this.isShowBackTop = true:this.isShowBackTop = false
       this.topCheck = - position.y > this.tabControloffsetTop;
    },
    loadMore(){

      this.getHomeGoods(this.currentType);
      console.log("上拉了");
      setTimeout(() => {
        this.$refs.Scroll.scroll.finishPullUp()
        this.$refs.Scroll.scroll.refresh();
      }, 500);
      
    },
    swiperimgLoad(){
      console.log(this.$refs.tabcontrol1.$el.offsetTop);
      this.tabControloffsetTop = this.$refs.tabcontrol1.$el.offsetTop;
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
        //console.log(this.$refs.Scroll.scroll);
        //this.$refs.Scroll.scroll.refresh();
      }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
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
/* .tab-control{
  position: sticky;
  top: 44px;
} */
/* .content{
  height: calc(100% - 44px);
  overflow: hidden;
} */
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabcontrol{
  position: relative;
  z-index: 9;
  top: -4px;
}

</style>