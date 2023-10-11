<template>
  <sinch-toggle
    v-bind:text="text"
    v-bind:disabled="isDisabled"
    v-bind:small="isSmall"
    v-bind:labeled="isLabeled"
    v-bind:checked="checked"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
  </sinch-toggle>
</template>

<script>
import '@nectary/components/toggle'

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
  computed: {
    text() {
      return this.$route.query.text
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    isSmall() {
      return this.$route.query.small != null
    },
    isLabeled() {
      return this.$route.query.labeled != null
    },
    isControlled() {
      return this.$route.query.uncontrolled == null
    },
  },
  data() {
    return {
      checked: this.$route.query.checked != null
    }
  }
}
</script>

