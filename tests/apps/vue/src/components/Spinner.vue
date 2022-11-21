<template>
  <sinch-spinner :size="size"></sinch-spinner>
</template>

<script>
import '@sinch-engage/nectary/spinner'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    size() {
      return this.search.get('size')
    },
  }
}
</script>
