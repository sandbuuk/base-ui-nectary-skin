<template>
  <sinch-chip v-bind:color="color" v-bind:text="text" v-bind:small="isSmall" @--click="onClick" @--focus="onFocus"
    @--blur="onBlur">
    <sinch-icon-fa-face-smile v-if="hasIcon" slot="icon"></sinch-icon-fa-face-smile>
    <sinch-icon-fa-plus v-if="hasRightIcon" slot="right-icon"></sinch-icon-fa-plus>
  </sinch-chip>
</template>

<script>
import '@nectary/components/chip'
import '@nectary/assets/icons/fa-face-smile'
import '@nectary/assets/icons/fa-plus'

export default {
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
