<template>
  <div class="hello">
    <h1>Home</h1>
    <router-link to="/about">Go to about page</router-link>
    <div class="baskets">
      <h2>Vuex</h2>
      <List/><Basket1/><Basket2/>
    </div>

  </div>
</template>

<script>
import Basket1 from '@/components/Basket1'
import Basket2 from '@/components/Basket2'
import List from '@/components/List'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    List,
    Basket1,
    Basket2
  }
}
</script>

<style lang="scss">
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.baskets {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid lightblue;
  & > div {
    display: inline-block;
    padding: 30px;
  }
}
.basket {
  div {
    text-align: left;
  }
}
ul {
  text-align: left;
}
</style>
