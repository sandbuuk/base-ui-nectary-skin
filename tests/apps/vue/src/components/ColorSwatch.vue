<template>
  <sinch-color-swatch v-bind:name="name"></sinch-color-swatch>
</template>

<script>
import '@sinch-engage/nectary/color-swatch'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    name() {
      return this.search.get('name') ?? ''
    },
  },
}
</script>

