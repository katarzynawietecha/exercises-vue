<template>
  <div class="hello">
    <!-- <div>
      <label for="workers">Workers</label>
      <input type="number" name="workers" />
    </div>
    <div>
      <label for="pizzas">Pizzas</label>
      <input type="number" name="pizzas"  />
    </div> -->
    <ProductList/>
    <br />
    <router-link to="/about">Go to about page</router-link>
  </div>
</template>

<script>
import ProductList from './ProductList'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    ProductList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
