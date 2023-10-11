<template>
  <sinch-badge :hidden="!hasBadge" text="8" mode="circle" size="m">
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
import '@nectary/components/avatar'
import '@nectary/components/badge'

export default {
  computed: {
    src() {
      return this.$route.query.src ?? undefined
    },
    alt() {
      return this.$route.query.alt ?? undefined
    },
    size() {
      return this.$route.query.size ?? undefined
    },
    color() {
      return this.$route.query.color ?? undefined
    },
    hasBadge() {
      return this.$route.query.badge != null
    },
    status() {
      return this.$route.query.status ?? undefined
    }
  },
}
</script>

