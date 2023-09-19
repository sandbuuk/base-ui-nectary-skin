<template>
  <sinch-spinner :size="size"></sinch-spinner>
</template>

<script>
import '@nectary/components/spinner'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    size() {
      return this.$route.query.size
    },
  }
}
</script>
