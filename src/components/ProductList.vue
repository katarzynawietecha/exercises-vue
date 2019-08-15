<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }}: {{ product.price }}
        <div>
        amound {{ product.inventory }}
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop'
import store from '@/store/index'

export default {
  computed: {
    products () {
      return store.state.products
    }
  },
  created () {
    shop.getProducts(products => {
      store.commit('setProducts', products)
    })
  }
}
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    li {
      border: 1px solid lightblue;
      margin: 10px;
      display: block;

    }
  }
</style>
