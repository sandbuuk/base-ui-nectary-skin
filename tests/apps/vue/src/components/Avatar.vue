<template>
  <sinch-avatar
    :src="src"
    :alt="alt"
    :size="size"
    :background="background"
  />
</template>

<script>
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
      return this.search.get('background') ?? undefined
    }
  },
}
</script>

