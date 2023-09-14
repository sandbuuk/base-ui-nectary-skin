<template>
  <sinch-button
    :type="type"
    :text="text"
    :disabled="isDisabled"
    :size="size"
    @--click="onClick"
    @--focus="onFocus"
    @--blur="onBlur">
    <sinch-spinner v-if="hasSpinner" static :type="isSmall ? 'small' : 'medium'" slot="left-icon"></sinch-spinner>
    <sinch-icon-open-in-new v-if="hasLeftIcon" slot="left-icon"></sinch-icon-open-in-new>
    <sinch-icon-expand-more v-if="hasRightIcon" slot="right-icon"></sinch-icon-expand-more>
  </sinch-button>
</template>

<script>
import '@nectary/components/button'
import '@nectary/assets/icons/open-in-new'
import '@nectary/assets/icons/expand-more'
import '@nectary/components/spinner'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onClick() {
      window.dispatchEvent(new CustomEvent('sinch-button-click'))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-button-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-button-blur'))
    }
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
    size() {
      return this.search.get('size') !== null
    },
    hasLeftIcon() {
      return this.search.get('icon-left') !== null
    },
    hasRightIcon() {
      return this.search.get('icon-right') !== null
    },
    hasSpinner() {
      return this.search.get('spinner') !== null
    },
  }
}
</script>
