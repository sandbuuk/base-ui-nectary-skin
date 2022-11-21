<template>
  <sinch-file-drop
    :accept="accept"
    :multiple="isMultiple"
    :disabled="isDisabled"
    :invalid="isInvalid"
    placeholder="Drag and drop to upload or"
    @--change="onChange"
    @--invalid="onInvalid"
  >
    <sinch-button
      type="cta-secondary"
      size="s"
      text="Choose files"
      aria-label="Choose files"
      :disabled="isDisabled"
    ></sinch-button>
  </sinch-file-drop>
</template>

<script>
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/button'

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-file-drop-change', { detail: e.detail }))
    },
    onInvalid(e) {
      window.dispatchEvent(new CustomEvent('sinch-file-drop-invalid', { detail: e.detail }))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    accept() {
      return this.search.get('accept')
    },
    isMultiple() {
      return this.search.get('multiple') !== null
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    isInvalid() {
      return this.search.get('invalid') !== null
    },
  }
}
</script>

