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
import '@nectary/components/file-drop'
import '@nectary/components/button'

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
      return this.$route.query.accept
    },
    isMultiple() {
      return this.$route.query.multiple != null
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    isInvalid() {
      return this.$route.query.invalid != null
    },
  }
}
</script>

