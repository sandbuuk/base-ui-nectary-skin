<template>
  <sinch-button :type="type" :text="text" :disabled="isDisabled" :toggled="isToggled" :size="size" @--click="onClick"
    @--focus="onFocus" @--blur="onBlur">
    <sinch-spinner v-if="hasSpinner" static :type="isSmall ? 'small' : 'medium'" slot="icon"></sinch-spinner>
    <sinch-icon name="fa-arrow-up-right-from-square" v-if="hasIcon" slot="icon"></sinch-icon>
    <sinch-icon name="fa-angle-down" v-if="hasRightIcon" slot="right-icon"></sinch-icon>
  </sinch-button>
</template>

<script>
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/spinner'

export default {
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
      return this.$route.query.type
    },
    text() {
      return this.$route.query.text
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    isToggled() {
      return this.$route.query.toggled != null
    },
    size() {
      return this.$route.query.size != null
    },
    hasRightIcon() {
      return this.$route.query['icon-right'] != null
    },
    hasIcon() {
      return this.$route.query['icon'] != null
    },
    hasSpinner() {
      return this.$route.query.spinner != null
    },
  }
}
</script>
