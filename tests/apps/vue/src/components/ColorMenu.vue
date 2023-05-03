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
import '@sinch-engage/nectary/color-menu'
import '@sinch-engage/nectary/color-menu-option'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const colors = [...lightColors, ...vibrantColors, ...darkColors]
const lightVibrantColors = [...lightColors, ...vibrantColors]

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-color-menu-change', {detail: e.detail}))
      this.value = e.detail
    },
  },
  computed: {
    rows() {
      const val = this.search.get('rows')
      return val !== null ? parseInt(val) : null
    },
    cols() {
      const val = this.search.get('cols')
      return val !== null ? parseInt(val) : null
    },
    colors() {
      return this.search.get('example') === 'light'
        ? lightVibrantColors
        : colors
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

