<template>
  <sinch-progress
    :value="value"
    :detailed="detailed"
  ></sinch-file-status>
</template>

<script>
import '@sinch-engage/nectary/progress'

export default {
  methods: {
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    value() {
      const val = this.search.get('value') ?? '0'
      const int = parseInt(val)

      return Number.isInteger(int) ? int : 0
    },
    isDetailed() {
      return this.search.get('detailed') !== null
    },
  }
}
</script>

