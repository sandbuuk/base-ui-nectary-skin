<template>
  <sinch-emoji-picker @--change="onChange"></sinch-emoji-picker>
</template>

<script>
import '@nectary/components/emoji-picker'

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-emoji-picker-change', {detail: e.detail}))
    }
  },
  props: {
    search: URLSearchParams
  }
}
</script>

