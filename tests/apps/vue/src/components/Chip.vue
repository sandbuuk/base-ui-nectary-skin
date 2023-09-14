<template>
  <sinch-chip
    v-bind:color="color"
    v-bind:text="text"
    v-bind:small="isSmall"
    @--click="onClick"
    @--focus="onFocus"
    @--blur="onBlur"
  >
    <sinch-icon v-if="hasIcon" slot="icon" name="sentiment_satisfied"></sinch-icon>
    <sinch-icon v-if="hasRightIcon" slot="right-icon" name="add"></sinch-icon>
  </sinch-chip>
</template>

<script>
import '@nectary/components/chip'
import '@nectary/components/icon'

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
    hasRightIcon() {
      return this.search.get('right-icon') != null
    },
  },
}
</script>

