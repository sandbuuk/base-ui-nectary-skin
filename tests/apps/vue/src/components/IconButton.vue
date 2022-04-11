<template>
  <sinch-icon-button
    :disabled="isDisabled"
    @click="onClick"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-icon-help-outline v-if="!hasSpinner" size="24" slot="icon"></sinch-icon-help-outline>
    <sinch-spinner v-if="hasSpinner" static type="medium" slot="icon"></sinch-spinner>
  </sinch-icon-button>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onClick() {
      window.dispatchEvent(new CustomEvent('sinch-icon-button-click'))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-icon-button-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-icon-button-blur'))
    }
  },
  computed: {
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    hasSpinner() {
      return this.search.get('spinner') !== null
    },
  }
}
</script>

