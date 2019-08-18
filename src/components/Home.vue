<template>
  <div class="hello">
    <h1>Home</h1>
    <router-link to="/about">Go to about page</router-link>

    <div class="baskets custom-box">
      <h2>Vuex</h2>
      <List/><Basket1/><Basket2/>
    </div>

    <div class="slots custom-box">
      <h2>Slot</h2>
      <Animal>
        Tiger is a dangerous animal!
      </Animal><SmallAnimal>
        Hamster
      </SmallAnimal>
    </div>

  </div>
</template>

<script>
import Basket1 from '@/components/Basket1'
import Basket2 from '@/components/Basket2'
import List from '@/components/List'
import Animal from '@/components/Animal'
import SmallAnimal from '@/components/SmallAnimal'

export default {
  name: 'Home',
  components: {
    List,
    Basket1,
    Basket2,
    Animal,
    SmallAnimal
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
.custom-box {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid black;
}
.baskets {
  border-color: lightblue;
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
.slots {
  border-color: lightgreen;
  & > div {
    display: inline-block;
    width: 50%;
  }
}
</style>
