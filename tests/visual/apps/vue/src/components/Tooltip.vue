<template>
  <sinch-tooltip
    v-bind:orientation="orientation"
    v-bind:text="text"
    v-bind:inverted="isInverted"
    v-bind:width="width"
  ><button>Some content</button></sinch-tooltip>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    width() {
      return this.search.get('width')
    },
    text() {
      return this.search.get('text')
    },
    orientation() {
      return this.search.get('orientation')
    },
    isInverted() {
      return this.search.get('disabled') !== null
    },
  }
}
</script>

