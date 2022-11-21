<template>
<sinch-alert
  :type="type"
  :text="text">
  <sinch-icon-button
    v-if="hasClose"
    slot="close"
    size="s"
    @--click="onCloseClick"
    @--focus="onCloseFocus"
    @--blur="onCloseBlur">
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
  <sinch-button
    v-if="hasAction"
    slot="action"
    type="cta-secondary"
    size="s"
    text="This is a Button!"
    @--click="onButtonClick"
    @--focus="onButtonFocus"
    @--blur="onButtonBlur">
  </sinch-button>
</sinch-alert>
</template>

<script>
import '@sinch-engage/nectary/alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onCloseClick() {
      window.dispatchEvent(new CustomEvent('sinch-alert-close-click'))
    },
    onCloseFocus() {
      window.dispatchEvent(new CustomEvent('sinch-alert-close-focus'))
    },
    onCloseBlur() {
      window.dispatchEvent(new CustomEvent('sinch-alert-close-blur'))
    },
    onButtonClick() {
      window.dispatchEvent(new CustomEvent('sinch-alert-button-click'))
    },
    onButtonFocus() {
      window.dispatchEvent(new CustomEvent('sinch-alert-button-focus'))
    },
    onButtonBlur() {
      window.dispatchEvent(new CustomEvent('sinch-alert-button-blur'))
    }
  },
  computed: {
    text() {
      return this.search.get('text') ?? ''
    },
    type() {
      return this.search.get('type')
    },
    hasClose() {
      return this.search.get('close') != null
    },
    hasAction() {
      return this.search.get('action') != null
    },
  },
}
</script>

