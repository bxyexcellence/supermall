export const itemListenerMixin = {
  data () {
    return {
      itemImgListener:null
    }
  },
  mounted () {
    this.itemImgListener = () => {
      this.$refs.Scroll && this.$refs.Scroll.scroll.refresh();
      //refresh();
    }
    this.$bus.$on('goodsImgLoadEvent', this.itemImgListener)
    console.log('我是混入');
  }
}