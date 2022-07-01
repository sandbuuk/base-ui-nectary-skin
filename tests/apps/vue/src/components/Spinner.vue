<template>
  <sinch-spinner
    v-bind:type="type"
    static
  ></sinch-spinner>
</template>

<script>
import '@sinch-engage/nectary/spinner'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    type() {
      return this.search.get('type')
    },
  }
}
</script>

