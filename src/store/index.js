import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  // data
  state: {
    apple: 80,
    banana: 5,
    other: 'milk'
  },
  mutations: {
    updateApple (state, payload) {
      state.apple = payload
    },
    updateBanana (state, payload) {
      state.banana = payload
    },
    updateOther (state, payload) {
      state.other = payload
    }
  }
})

export default store
