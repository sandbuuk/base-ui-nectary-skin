<template>
  <sinch-button-group :type="type" :size="size">
    <sinch-button-group-item :text="text" :disabled="isDisabled" :toggled="isToggled" :aria-label="Button"
      @--click="onClick" @--focus="onFocus" @--blur="onBlur">
      <sinch-spinner v-if="hasSpinner" slot="icon"></sinch-spinner>
      <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" v-if="hasIcon" slot="icon"></sinch-icon>
      <sinch-icon icons-version="2" name="fa-angle-down" v-if="hasRightIcon" slot="right-icon"></sinch-icon>
    </sinch-button-group-item>
    <sinch-button-group-item :text="text" :aria-label="Button">
      <sinch-spinner v-if="hasSpinner" slot="icon"></sinch-spinner>
      <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" v-if="hasIcon" slot="icon"></sinch-icon>
      <sinch-icon icons-version="2" name="fa-angle-down" v-if="hasRightIcon" slot="right-icon"></sinch-icon>
    </sinch-button-group-item>
    <sinch-button-group-item :text="text" :aria-label="Button">
      <sinch-spinner v-if="hasSpinner" slot="icon"></sinch-spinner>
      <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" v-if="hasIcon" slot="icon"></sinch-icon>
      <sinch-icon icons-version="2" name="fa-angle-down" v-if="hasRightIcon" slot="right-icon"></sinch-icon></sinch-button-group-item>
  </sinch-button-group>

</template>

<script>
import '@nectary/components/button-group'
import '@nectary/components/button-group-item'
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
