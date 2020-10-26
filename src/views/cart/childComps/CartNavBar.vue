<template>
  <div class="cart-nav-bar">
    <nav-bar><div slot="center">购物车({{cartLength}})</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: '',
  data(){
    return {

    }
  },
  components:{
    NavBar
  },
  computed: {
    cartLength(){
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>
.cart-nav-bar{
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
