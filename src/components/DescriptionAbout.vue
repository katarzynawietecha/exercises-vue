<template>
  <div class="description-about">
    Here are paragraphs for unit tests:
    <p class="static-text">This text is static.</p>
    <p class="props-text">{{ propstext }}</p>
    <div class="buttonbox-counter"><button @click='counter1 ++'>Click to add 1 to first counter</button> First counter: number of clicks: <span>{{ counter1 }}</span></div>
    <div class="buttonbox-math"><button @click='doMath()'>Click to do some math with second counter</button> Math magic here: <span>{{ counter2 }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionAbout',
  props: ['propstext'],
  data () {
    return {
      counter1: 0,
      counter2: 0
    }
  },
  methods: {
    doMath () {
      this.counter2 = 3 * (this.counter2 + 5)
    }
  }
}
</script>
