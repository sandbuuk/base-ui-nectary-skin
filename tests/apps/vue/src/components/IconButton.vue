<template>
  <sinch-icon-button
    :size="size"
    :disabled="isDisabled"
    aria-label="Button"
    @--click="onClick"
    @--focus="onFocus"
    @--blur="onBlur">
    <sinch-spinner v-if="hasSpinner" slot="icon"></sinch-spinner>
    <sinch-icon-help-outline v-if="!hasSpinner" slot="icon"></sinch-icon-help-outline>
  </sinch-icon-button>
</template>

<script>
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/help-outline'
import '@sinch-engage/nectary/spinner'

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
    size() {
      return this.search.get('size')
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    hasSpinner() {
      return this.search.get('spinner') !== null
    },
  }
}
</script>
