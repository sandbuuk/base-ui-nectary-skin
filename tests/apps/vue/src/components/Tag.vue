<template>
  <sinch-tag
    v-bind:color="color"
    v-bind:text="text"
    v-bind:small="isSmall"
  >
    <sinch-icon-mood-bad v-if="hasIcon" slot="icon"></sinch-icon-mood-bad>
  </sinch-tag>
</template>

<script>
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/mood-bad'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text') ?? ''
    },
    color() {
      return this.search.get('color') ?? ''
    },
    isSmall() {
      return this.search.get('small') != null
    },
    hasIcon() {
      return this.search.get('icon') != null
    },
  },
}
</script>

