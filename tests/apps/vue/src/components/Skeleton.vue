<template>
  <sinch-skeleton :card="isCard">
    <div style="display: flex; gap: 16px;">
      <sinch-skeleton-item size="l" style="width: 30%;"></sinch-skeleton-item>
      <sinch-skeleton-item size="l" style="flex: 1;"></sinch-skeleton-item>
    </div>
    <sinch-skeleton-item size="m" style="width: 50%; margin-left: auto;"></sinch-skeleton-item>
    <sinch-skeleton-item size="s" style="width: 60%;"></sinch-skeleton-item>
    <sinch-skeleton-item style="width: 70%; height: 120px; margin-left: auto;"></sinch-skeleton-item>
  </sinch-skeleton>
</template>

<script>
import '@nectary/components/skeleton'
import '@nectary/components/skeleton-item'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    isCard() {
      return this.$route.query.card != null
    }
  }
}
</script>
