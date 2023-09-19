<template>
  <sinch-icon-button aria-label="Button">
    <sinch-badge
      slot="icon"
      :text="text"
      :mode="mode"
      :size="size"
      :color="color"
      :hidden="isHidden"
    >
      <sinch-icon-notifications></sinch-icon-notifications>
    </sinch-badge>
  </sinch-icon-button>
</template>

<script>
import '@nectary/components/badge'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/notifications'

export default {
  props: {
    search: URLSearchParams
  },
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

