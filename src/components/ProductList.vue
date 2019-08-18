<template>
  <div>
    <h1>Products</h1>
    <img v-if="loading" src="../assets/ajax-loader.gif" alt="spinner" />
    <ul v-else>
      <li v-for="product in products" :key="product.id">{{ product.title }}: {{ product.price }}
        <div>
        amount {{ product.inventory }}
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  data(){
    return {
      loading: false
    }
  },
  computed: {
    products () {
      return store.getters.availableProducts
    }
  },
  created () {
    this.loading = true
    store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  }
}
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    li {
      border: 1px solid lightblue;
      margin: 10px;
      display: inline-block;
      width: 250px;
    }
  }
</style>
