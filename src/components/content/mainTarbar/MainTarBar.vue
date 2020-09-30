<template>
    <TarBar>
     <TarBarItem path="/home">
       <img src="~assets/img/tabbar/home.svg" slot="ItemIcon" >
        <img src="~assets/img/tabbar/home_active.svg" slot="ItemIconActive">
        <div slot="ItemText">首页</div>
     </TarBarItem>
     <TarBarItem path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="ItemIcon">
        <img src="~assets/img/tabbar/category_active.svg" slot="ItemIconActive">
        <div slot="ItemText">分类</div>
     </TarBarItem>
     <TarBarItem path="/cart">
       <img src="~assets/img/tabbar/shopcart.svg" slot="ItemIcon">
       <img src="~assets/img/tabbar/shopcart_active.svg" slot="ItemIconActive">
        <div slot="ItemText">购物车</div>
     </TarBarItem>
     <TarBarItem path="/profile">
       <img src="~assets/img/tabbar/profile.svg" slot="ItemIcon">
       <img src="~assets/img/tabbar/profile_active.svg" slot="ItemIconActive">
        <div slot="ItemText">我的</div>
     </TarBarItem>
   </TarBar>
</template>

<script>
import TarBar from 'components/common/tarbar/TarBar'
import TarBarItem from 'components/common/tarbar/TarBarItem'
export default {
  name: 'MainTarBar',
  data() {
    return {

    }
  },
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style scoped >
</style>
