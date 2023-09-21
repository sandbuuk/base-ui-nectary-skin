<template>
  <sinch-progress
    :value="value"
    :detailed="isDetailed"
  ></sinch-progress>
</template>

<script>
import '@nectary/components/progress'

export default {
  methods: {
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    value() {
      const val = this.$route.query.value ?? '0'
      const int = parseInt(val)

      return Number.isInteger(int) ? int : 0
    },
    isDetailed() {
      return this.$route.query.detailed != null
    },
  }
}
</script>

