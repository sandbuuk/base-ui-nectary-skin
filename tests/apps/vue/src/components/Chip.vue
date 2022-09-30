<template>
  <sinch-chip
    v-bind:color="color"
    v-bind:text="text"
    v-bind:small="isSmall"
    @--click="onClick"
    @--focus="onFocus"
    @--blur="onBlur"
  >
    <sinch-icon-mood-bad v-if="hasIcon" slot="icon"></sinch-icon-mood-bad>
  </sinch-chip>
</template>

<script>
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/icons/mood-bad'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onClick() {
      window.dispatchEvent(new CustomEvent('sinch-chip-click'))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-chip-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-chip-blur'))
    }
  },
  computed: {
    text() {
      return this.search.get('text') ?? ''
    },
    color() {
      return this.search.get('color')
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

