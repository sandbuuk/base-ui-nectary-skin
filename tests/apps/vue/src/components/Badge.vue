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
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/notifications'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    mode() {
      return this.search.get('mode') ?? undefined
    },
    text() {
      return this.search.get('text') ?? ''
    },
    size() {
      return this.search.get('size') ?? undefined
    },
    color() {
      return this.search.get('color') ?? undefined
    },
    isHidden() {
      return this.search.get('hidden') !== null
    }
  },
}
</script>

