<template>
  <sinch-time-picker
    :ampm="ampm"
    :value="value"
    @--change="onChange"
    @focusin="onFocus"
    @focusout="onBlur"
  ></sinch-time-picker>
</template>

<script>
import '@nectary/components/time-picker'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-time-picker-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-time-picker-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-time-picker-blur'))
    }
  },
  computed: {
    ampm() {
      return this.$route.query.ampm != null
    },
    isControlled() {
      return this.$route.query.uncontrolled == null
    },
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>

