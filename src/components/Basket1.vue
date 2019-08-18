<template>
  <div class="basket">
    <h2>Basket 1</h2>
    <p>Listening changes and changing state</p>
    <div>
      <label for="apple">Apple</label>
      <input type="number" name="apple" v-model="apple" />
    </div>
    <div>
      <label for="banana">Banana</label>
      <input type="number" name="banana" v-model="banana" />
    </div>
    <div>
      <label for="other">Other</label>
      <input type="text" name="other" v-model="other" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    apple: {
      get () { // getter get value from state
        return this.$store.state.apple
      },
      set (value) { // setter set new value
        this.$store.commit('updateApple', value)
      }
    },
    banana: {
      get () {
        return this.$store.state.banana
      },
      set (value) {
        this.$store.commit('updateBanana', value)
      }
    },
    other: {
      get () {
        return this.$store.state.other
      },
      set (value) {
        this.$store.commit('updateOther', value)
      }
    }
  }
}
</script>
