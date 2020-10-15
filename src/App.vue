<template>
  <div id="app">
    <keep-alive><router-view></router-view></keep-alive>
    <MainTarBar></MainTarBar>
  
  </div>
</template>

<script>
import MainTarBar from 'components/content/mainTarbar/MainTarBar'
export default {
  name: 'App',
  components: {
    MainTarBar
  }
}
</script>

<style>
@import "assets/css/base.css";

</style>
