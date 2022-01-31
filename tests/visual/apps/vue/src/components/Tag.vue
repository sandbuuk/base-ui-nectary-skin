<template>
  <sinch-tag
    v-bind:category="category"
    v-bind:text="text"
    v-bind:small="isSmall"
    v-bind:inverted="isInverted"
  >
    <sinch-icon-share v-if="hasIcon" size="12" slot="icon"></sinch-icon-share>
    <sinch-tag-close v-if="isDismissable" v-bind:small="isSmall" slot="close"></sinch-tag-close>
  </sinch-tag>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text') ?? ''
    },
    category() {
      return this.search.get('category') ?? undefined
    },
    isDismissable() {
      return this.search.get('dismissable') != null
    },
    isSmall() {
      return this.search.get('small') != null
    },
    isInverted() {
      return this.search.get('inverted') != null
    },
    hasIcon() {
      return this.search.get('icon') != null
    },
  },
}
</script>

