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
import '@nectary/components/file-picker'
import '@nectary/components/button'
import '@nectary/assets/icons/upload'

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-file-picker-change', { detail: e.detail }))
    },
    onInvalid (e) {
      window.dispatchEvent(new CustomEvent('sinch-file-picker-invalid', { detail: e.detail }))
    }
  },
  computed: {
    accept() {
      return this.$route.query.type
    },
    isMultiple() {
      return this.$route.query.multiple != null
    },
  }
}
</script>

