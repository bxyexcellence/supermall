export default {
  addCart({
    state,
    commit
  }, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      //oldProduct.count += 1
      commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      commit('addToCart', payload)
      //state.cartList.push(payload)
    }

  }
}