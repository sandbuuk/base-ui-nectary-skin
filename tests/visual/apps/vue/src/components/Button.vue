<template>
  <sinch-button
    v-bind:type="type"
    v-bind:text="text"
    v-bind:disabled="isDisabled"
    v-bind:small="isSmall">
    <sinch-icon-share v-if="hasIcon"></sinch-icon-share>
    <sinch-spinner v-if="hasSpinner" static></sinch-spinner>
  </sinch-button>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    type() {
      return this.search.get('type')
    },
    text() {
      return this.search.get('text')
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    isSmall() {
      return this.search.get('small') !== null
    },
    hasIcon() {
      return this.search.get('icon') !== null
    },
    hasSpinner() {
      return this.search.get('spinner') !== null
    },
  }
}
</script>

