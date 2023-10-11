<template>
  <sinch-checkbox
    :text="text"
    :disabled="isDisabled"
    :indeterminate="isIndeterminate"
    :invalid="isInvalid"
    :checked="checked"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
  </sinch-checkbox>
</template>

<script>
import '@nectary/components/checkbox'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.checked = e.detail
        window.dispatchEvent(new CustomEvent('sinch-checkbox-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-checkbox-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-checkbox-blur'))
    }
  },
  computed: {
    text() {
      return this.$route.query.text
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    isIndeterminate() {
      return this.$route.query.indeterminate != null
    },
    isInvalid() {
      return this.$route.query.invalid != null
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

