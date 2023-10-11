<template>
  <sinch-title
    :text="text"
    :type="type"
    :level="level"
  ></sinch-title>
</template>

<script>
import '@nectary/components/title'

export default {
  computed: {
    text() {
      return this.$route.query.text
    },
    type() {
      return this.$route.query.type
    },
    level() {
      return this.$route.query.level
    },
  },
}
</script>
