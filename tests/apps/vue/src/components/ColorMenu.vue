<template>
  <sinch-color-menu
    :colors="colors"
    :rows="rows"
    :cols="cols"
    :value="value"
    @--change="onChange"
    aria-label="Menu"
  ></sinch-color-menu>
</template>

<script>
import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import '@sinch-engage/nectary/color-menu'

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
      return this.search.get('colors')
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? NO_COLOR
    }
  }
}
</script>

