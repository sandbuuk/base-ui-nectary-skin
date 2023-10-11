<template>
  <sinch-spinner :size="size"></sinch-spinner>
</template>

<script>
import '@nectary/components/spinner'

export default {
  computed: {
    size() {
      return this.$route.query.size
    },
  }
}
</script>
