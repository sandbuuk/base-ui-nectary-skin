<template>
  <sinch-badge v-if="hasBadge" text="8" :size="size" mode="circle">
    <sinch-avatar
      :src="src"
      :alt="alt"
      :size="size"
      :background="background"
    >
      <sinch-avatar-status v-if="statusColor != null" slot="status" :color="statusColor"></sinch-avatar-status>
    </sinch-avatar>
  </sinch-badge>
  <sinch-avatar
    v-if="!hasBadge"
    :src="src"
    :alt="alt"
    :size="size"
    :background="background"
  >
    <sinch-avatar-status v-if="statusColor != null" slot="status" :color="statusColor"></sinch-avatar-status>
  </sinch-avatar>
</template>

<script>
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/avatar-status'

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
    background() {
      return this.search.get('bg') ?? undefined
    },
    hasBadge() {
      return this.search.get('badge') !== null
    },
    statusColor() {
      return this.search.get('status')
    }
  },
}
</script>

