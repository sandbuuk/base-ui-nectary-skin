<template>
  <sinch-date-picker
    :locale="locale"
    :min="min"
    :max="max"
    :value="value"
    @--change="onChange"
    @focusin="onFocus"
    @focusout="onBlur"
  ></sinch-date-picker>
</template>

<script>
import '@sinch-engage/nectary/date-picker'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-date-picker-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-date-picker-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-date-picker-blur'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    locale() {
      return this.search.get('locale')
    },
    min() {
      return this.search.get('min')
    },
    max() {
      return this.search.get('max')
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

