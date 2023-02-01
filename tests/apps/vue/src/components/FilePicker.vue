<template>
  <sinch-file-picker
    :multiple="isMultiple"
    :accept="accept"
    @--change="onChange"
    @--invalid="onInvalid"
  >
    <sinch-button
      text="Choose files"
      type="secondary"
      aria-label="Choose files"
    >
      <sinch-icon-upload slot="left-icon"></sinch-icon-upload>
    </sinch-button>
  </sinch-file-picker>
</template>

<script>
import '@sinch-engage/nectary/file-picker'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/icons/upload'

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-file-picker-change', { detail: e.detail }))
    },
    onInvalid (e) {
      window.dispatchEvent(new CustomEvent('sinch-file-picker-invalid', { detail: e.detail }))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    accept() {
      return this.search.get('type')
    },
    isMultiple() {
      return this.search.get('multiple') !== null
    },
  }
}
</script>

