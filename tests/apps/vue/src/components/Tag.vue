<template>
  <sinch-tag
    v-bind:color="color"
    v-bind:text="text"
    v-bind:small="isSmall"
  >
    <sinch-icon-open-in-new v-if="hasIcon" slot="icon"></sinch-icon-open-in-new>
  </sinch-tag>
</template>

<script>
import '@nectary/components/tag'
import '@nectary/assets/icons/open-in-new'

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

