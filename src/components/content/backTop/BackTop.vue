<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data(){
    return {

    }
  },
  components:{

  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  bottom: 50px;
  z-index: 4;
  right: 5px;
}
.back-top img{
  width: auto;
  height: auto;
  max-width: 50px;
}
</style>
