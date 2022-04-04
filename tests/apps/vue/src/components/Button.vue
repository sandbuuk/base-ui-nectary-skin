<template>
  <sinch-button
    v-bind:type="type"
    v-bind:text="text"
    v-bind:disabled="isDisabled"
    v-bind:small="isSmall"
    @click="onClick"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-icon-open-in-new v-if="hasIcon" slot="icon"></sinch-icon-open-in-new>
    <sinch-spinner v-if="hasSpinner" static v-bind:type="isSmall ? 'small' : 'medium'" slot="icon"></sinch-spinner>
  </sinch-button>
</template>

<script>
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
    isSmall() {
      return this.search.get('small') !== null
    },
    hasIcon() {
      return this.search.get('icon') !== null
    },
    hasSpinner() {
      return this.search.get('spinner') !== null
    },
  }
}
</script>

