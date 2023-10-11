<template>
  <sinch-color-swatch v-bind:name="name"></sinch-color-swatch>
</template>

<script>
import '@nectary/components/color-swatch'

export default {
  computed: {
    name() {
      return this.$route.query.name ?? ''
    },
  },
}
</script>

