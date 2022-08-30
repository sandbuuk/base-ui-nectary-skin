<template>
  <sinch-textarea
    :placeholder="placeholderText"
    :invalid="isInvalid"
    :disabled="isDisabled"
    :value="value"
    :rows="rows"
    :resizable="resizable"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
  </sinch-textarea>
</template>

<script>
import '@sinch-engage/nectary/textarea'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-textarea-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-textarea-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-textarea-blur'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    placeholderText() {
      return this.search.get('placeholder')
    },
    isInvalid() {
      return this.search.get('invalid') !== null
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    rows() {
      return this.search.get('rows')
    },
    resizable() {
      return this.search.get('resizable')
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

