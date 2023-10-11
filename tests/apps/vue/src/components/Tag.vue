<template>
  <sinch-tag
    v-bind:color="color"
    v-bind:text="text"
    v-bind:small="isSmall"
  >
    <sinch-icon-open-in-new v-if="hasIcon" slot="icon"></sinch-icon-open-in-new>
  </sinch-tag>
</template>

<script>
import '@nectary/components/tag'
import '@nectary/assets/icons/open-in-new'

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

