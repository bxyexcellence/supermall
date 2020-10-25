<template>
  <div id="detail">
    <detail-nav-bar @navClick="toTitle" class="navbar" ref="nav"></detail-nav-bar>
    <Scroll class="content" ref="scroll" :probeType="3" @scroll="scrollPos">
      <detail-swiper :topImages ="topImages"></detail-swiper>
      <detail-base-info :goods ="goods"></detail-base-info>
      <detail-shop-info :shop ="shop"></detail-shop-info>
      <detail-goods-info :detailInfo ="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo=" commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-botton-bar @addCart="addCart"></detail-botton-bar>
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavBar';
import detailSwiper from './childComps/detailSwiper';
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'
import detailGoodsInfo from './childComps/detailGoodsInfo'
import detailParamInfo from './childComps/detailParamInfo'
import detailCommentInfo from './childComps/detailCommentInfo'
import detailBottonBar from './childComps/detailBottonBar'
import BackTop from 'components/content/backTop/BackTop'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import { itemListenerMixin } from 'common/mixin'

import { getDetail,getRecommend,Goods,Shop, GoodsParam } from 'network/detail'
export default {
  name: 'Detail',
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTop:[],
      currectIndex:0,
      isShowBackTop:false
    }
  },
  components:{
   detailNavBar,
   detailSwiper,
   detailBaseInfo,
   detailShopInfo,
   Scroll,
   detailGoodsInfo,
   detailParamInfo,
   detailCommentInfo,
   GoodsList,
   detailBottonBar,
   BackTop
  },
  created () {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services) 
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend().then(res =>{
      this.recommends = res.data.list
    })
  },
  mixins: [itemListenerMixin],
  deactivated() {
    this.$bus.$off('goodsImgLoadEvent', this.itemImgListener)
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.scroll.refresh()
      this.themeTop = []
      this.themeTop.push(0)
      this.themeTop.push(this.$refs.param.$el.offsetTop)
      this.themeTop.push(this.$refs.comment.$el.offsetTop)
      this.themeTop.push(this.$refs.recommends.$el.offsetTop)
      console.log(this.themeTop);
    },
    toTitle(i){
      let themeHight = i === 0? -this.themeTop[i]:-this.themeTop[i]+44
      this.$refs.scroll.scroll.scrollTo(0,themeHight,1000)
    },
    scrollPos(position){
      position.y<-1000?this.isShowBackTop = true:this.isShowBackTop = false
      let positionY = -position.y+44
      let length = this.themeTop.length
      for (let i = 0; i < length; i++) {
        if(this.currectIndex !== i && i<length-1 && positionY >= this.themeTop[i] && positionY < this.themeTop[i+1]){
          //console.log(i);
          this.currectIndex = i
          this.$refs.nav.currectIndex = this.currectIndex
        }
        else if(this.currectIndex !== i && i===length-1 && positionY >= this.themeTop[i]){
          //console.log(i)
          this.currectIndex = i
          this.$refs.nav.currectIndex = this.currectIndex
        }
        
      }
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
      //console.log(this.$refs.Scroll);
    },
    addCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      console.log(product)
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
