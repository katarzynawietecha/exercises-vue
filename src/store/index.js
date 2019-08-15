import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    productsCount () {}
  },
  actions: {
    fetchProducts () {
      // make the call
    }
  },
  mutations: {
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})
