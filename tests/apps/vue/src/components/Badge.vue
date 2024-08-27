<template>
  <sinch-button aria-label="Button">
    <sinch-badge slot="icon" :text="text" :mode="mode" :size="size" :color="color" :hidden="isHidden">
      <sinch-icon icons-version="2" name="fa-bell"></sinch-icon>
    </sinch-badge>
  </sinch-button>
</template>

<script>
import '@nectary/components/badge'
import '@nectary/components/icon'

export default {
  computed: {
    mode() {
      return this.$route.query.mode ?? undefined
    },
    text() {
      return this.$route.query.text ?? ''
    },
    size() {
      return this.$route.query.size ?? undefined
    },
    color() {
      return this.$route.query.color ?? undefined
    },
    isHidden() {
      return this.$route.query.hidden != null
    }
  },
}
</script>
