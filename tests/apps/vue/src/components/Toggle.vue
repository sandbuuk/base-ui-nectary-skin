<template>
  <sinch-toggle
    v-bind:text="text"
    v-bind:disabled="isDisabled"
    v-bind:small="isSmall"
    v-bind:labeled="isLabeled"
    v-bind:checked="checked"
    @change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
  </sinch-toggle>
</template>

<script>
import '@sinch-engage/nectary/toggle'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.checked = e.detail
        window.dispatchEvent(new CustomEvent('sinch-toggle-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-toggle-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-toggle-blur'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text')
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    isSmall() {
      return this.search.get('small') !== null
    },
    isLabeled() {
      return this.search.get('labeled') !== null
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
  },
  data() {
    return {
      checked: this.search.get('checked') !== null
    }
  }
}
</script>

