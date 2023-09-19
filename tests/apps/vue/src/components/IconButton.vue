<template>
  <sinch-icon-button
    :size="size"
    :disabled="isDisabled"
    aria-label="Button"
    @--click="onClick"
    @--focus="onFocus"
    @--blur="onBlur"
    @--tooltip-show="onTooltipShow"
    @--tooltip-hide="onTooltipHide"
  >
    <sinch-spinner v-if="hasSpinner" slot="icon"></sinch-spinner>
    <sinch-icon-help-outline v-if="!hasSpinner" slot="icon"></sinch-icon-help-outline>
  </sinch-icon-button>
</template>

<script>
import '@nectary/components/icon-button'
import '@nectary/assets/icons/help-outline'
import '@nectary/components/spinner'

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
    },
    onTooltipShow() {
      window.dispatchEvent(new CustomEvent('sinch-icon-button-tooltip-show'))
    },
    onTooltipHide() {
      window.dispatchEvent(new CustomEvent('sinch-icon-button-tooltip-hide'))
    }
  },
  computed: {
    size() {
      return this.$route.query.size
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    hasSpinner() {
      return this.$route.query.spinner != null
    },
  }
}
</script>
