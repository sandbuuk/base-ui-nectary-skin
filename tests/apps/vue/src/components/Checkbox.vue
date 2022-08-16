<template>
  <sinch-checkbox
    :text="text"
    :disabled="isDisabled"
    :indeterminate="isIndeterminate"
    :invalid="isInvalid"
    :checked="checked"
    @--change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
  </sinch-checkbox>
</template>

<script>
import '@sinch-engage/nectary/checkbox'

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
    isIndeterminate() {
      return this.search.get('indeterminate') !== null
    },
    isInvalid() {
      return this.search.get('invalid') !== null
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

