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
      return this.$route.query.text ?? ''
    },
    color() {
      return this.$route.query.color
    },
    isSmall() {
      return this.$route.query.small != null
    },
    hasIcon() {
      return this.$route.query.icon != null
    },
    hasRightIcon() {
      return this.$route.query['right-icon'] != null
    },
  },
}
</script>

