<template>
  <sinch-alert
    v-bind:type="type"
    v-bind:text="text"
    v-bind:title="title"
    v-bind:multiline="isMultiline">
  <sinch-alert-close
    slot="close"
    v-if="isDismissable"
    @click="onCloseClick"
    @focusin="onCloseFocus"
    @focusout="onCloseBlur">
  </sinch-alert-close>
  <sinch-alert-button
    slot="button"
    v-if="actionText != null"
    v-bind:text="actionText"
    @click="onButtonClick"
    @focusin="onButtonFocus"
    @focusout="onButtonBlur">
  </sinch-alert-button>
</sinch-alert>
</template>

<script>
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
      return this.search.get('text') ?? undefined
    },
    title() {
      return this.search.get('title') ?? undefined
    },
    type() {
      return this.search.get('type') ?? undefined
    },
    actionText() {
      return this.search.get('action') ?? undefined
    },
    isDismissable() {
      return this.search.get('dismissable') != null
    },
    isMultiline() {
      return this.search.get('multiline') != null
    },
  },
}
</script>

