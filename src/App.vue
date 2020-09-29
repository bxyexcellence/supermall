<template>
  <div id="app">
    <router-view></router-view>
   <TarBar>
     <TarBarItem path="/home" activeColor="blue">
       <img src="./assets/img/tabbar/home.svg" slot="ItemIcon" >
        <img src="./assets/img/tabbar/home_active.svg" slot="ItemIconActive">
        <div slot="ItemText">首页</div>
     </TarBarItem>
     <TarBarItem path="/category">
        <img src="./assets/img/tabbar/category.svg" slot="ItemIcon">
        <img src="./assets/img/tabbar/category_active.svg" slot="ItemIconActive">
        <div slot="ItemText">分类</div>
     </TarBarItem>
     <TarBarItem path="/cart">
       <img src="./assets/img/tabbar/shopcart.svg" slot="ItemIcon">
       <img src="./assets/img/tabbar/shopcart_active.svg" slot="ItemIconActive">
        <div slot="ItemText">购物车</div>
     </TarBarItem>
     <TarBarItem path="/profile">
       <img src="./assets/img/tabbar/profile.svg" slot="ItemIcon">
       <img src="./assets/img/tabbar/profile_active.svg" slot="ItemIconActive">
        <div slot="ItemText">我的</div>
     </TarBarItem>
   </TarBar>
  
  </div>
</template>

<script>
import TarBar from './components/tarbar/TarBar'
import TarBarItem from './components/tarbar/TarBarItem'
export default {
  name: 'App',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
