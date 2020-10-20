<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <Scroll class="content" ref="scroll">
      <detail-swiper :topImages ="topImages"></detail-swiper>
      <detail-base-info :goods ="goods"></detail-base-info>
      <detail-shop-info :shop ="shop"></detail-shop-info>
      <detail-goods-info :detailInfo ="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo=" commentInfo"></detail-comment-info>
    </Scroll>
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

import Scroll from 'components/common/scroll/Scroll'

import { getDetail,Goods,Shop, GoodsParam } from 'network/detail'
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
      commentInfo:{}
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
   detailCommentInfo
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
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.scroll.refresh()
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
