<template>
  <sinch-avatar
    :src="src"
    :alt="alt"
    :size="size"
    :background="background"
  >
    <sinch-avatar-badge v-if="badgeText != null" slot="badge" :text="badgeText"></sinch-avatar-badge>
    <sinch-avatar-status v-if="statusColor != null" slot="status" :color="statusColor"></sinch-avatar-status>
  </sinch-avatar>
</template>

<script>
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/avatar-badge'
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
    badgeText() {
      return this.search.get('badge')
    },
    statusColor() {
      return this.search.get('status')
    }
  },
}
</script>

