<template>
  <sinch-color-menu
    :rows="rows"
    :cols="cols"
    :value="value"
    @--change="onChange"
    aria-label="Menu"
  >
    <sinch-color-menu-option v-for="col in colors" :key="col" :value="col"></sinch-color-menu-option>
  </sinch-color-menu>
</template>

<script>
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const colors = [...lightColors, ...vibrantColors, ...darkColors]
const lightVibrantColors = [...lightColors, ...vibrantColors]

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-color-menu-change', {detail: e.detail}))
      this.value = e.detail
    },
  },
  computed: {
    rows() {
      const val = this.$route.query.rows
      return val != null ? parseInt(val) : null
    },
    cols() {
      const val = this.$route.query.cols
      return val != null ? parseInt(val) : null
    },
    colors() {
      return this.$route.query.example === 'light'
        ? lightVibrantColors
        : colors
    }
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>

