<template>
  <sinch-badge :hidden="!hasBadge" text="8" mode="circle">
    <sinch-avatar
      :src="src"
      :alt="alt"
      :size="size"
      :color="color"
      :status="status"
    ></sinch-avatar>
  </sinch-badge>
</template>

<script>
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/badge'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    src() {
      return this.search.get('src') ?? ''
    },
    alt() {
      return this.search.get('alt') ?? undefined
    },
    size() {
      return this.search.get('size') ?? undefined
    },
    color() {
      return this.search.get('color') ?? undefined
    },
    hasBadge() {
      return this.search.get('badge') !== null
    },
    status() {
      return this.search.get('status') ?? undefined
    }
  },
}
</script>

