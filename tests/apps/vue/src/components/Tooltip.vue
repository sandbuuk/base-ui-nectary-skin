<template>
  <sinch-tooltip
    v-bind:orientation="orientation"
    v-bind:text="text"
    v-bind:inverted="isInverted">
    <span>Some content</span>
  </sinch-tooltip>
</template>

<script>
import '@sinch-engage/nectary/tooltip'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text')
    },
    orientation() {
      return this.search.get('orientation')
    },
    isInverted() {
      return this.search.get('disabled') !== null
    },
  }
}
</script>

