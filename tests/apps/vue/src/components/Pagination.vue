<template>
  <sinch-pagination
    v-bind:max="max"
    :value="value"
    @--change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
  </sinch-pagination>
</template>

<script>
import { attrValueToInteger } from '@nectary/components/utils'
import '@nectary/components/pagination'

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-pagination-change', {detail: e.detail}))
      if (this.isControlled) {
        this.value = e.detail
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-pagination-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-pagination-blur'))
    }
  },
  computed: {
    max() {
      return attrValueToInteger(this.$route.query.max)
    },
    isControlled() {
      return this.$route.query.uncontrolled == null
    },
  },
  data() {
    return {
      value: attrValueToInteger(this.$route.query.value)
    }
  }
}
</script>

