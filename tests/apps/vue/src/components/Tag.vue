<template>
  <sinch-tag v-bind:color="color" v-bind:text="text" v-bind:small="isSmall">
    <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" v-if="hasIcon" slot="icon"></sinch-icon>
  </sinch-tag>
</template>

<script>
import '@nectary/components/tag'
import '@nectary/components/icon'

export default {
  computed: {
    text() {
      return this.$route.query.text ?? ''
    },
    color() {
      return this.$route.query.color ?? ''
    },
    isSmall() {
      return this.$route.query.small != null
    },
    hasIcon() {
      return this.$route.query.icon != null
    },
  },
}
</script>
