<template>
  <sinch-title
    :text="text"
    :type="type"
    :level="level"
  ></sinch-title>
</template>

<script>
import '@sinch-engage/nectary/title'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text')
    },
    type() {
      return this.search.get('type')
    },
    level() {
      return this.search.get('level')
    },
  },
}
</script>
