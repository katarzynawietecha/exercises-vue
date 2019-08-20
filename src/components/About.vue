<template>
  <div>
    <h1>About</h1>
    <router-link to="/">Back to homepage</router-link>

    <div class="transition custom-box">
      <h2>Transition</h2>
      <button @click="show = !show">Click here to transition</button>
      <transition name="bla">
        <div v-if="show">Transition me</div>
      </transition>
    </div>

    <div class="unit-tests custom-box">
        <DescriptionAbout :propstext='`This text is a prop.`' />
    </div>

  </div>
</template>

<script>
import DescriptionAbout from '@/components/DescriptionAbout'

export default {
  data () {
    return {
      show: true
    }
  },
  components: {
    DescriptionAbout
  }
}
</script>

<style>
.transition {
  border-color: khaki;
}
button {
  margin-bottom: 20px;
}

.bla-enter-active, .bla-leave-active {
  transition: opacity 3s ease;
}

.bla-enter, .bla-leave-to {
  opacity: 0;
}
</style>
