<template>
  <sinch-date-picker
    :locale="locale"
    :min="min"
    :max="max"
    :range="isRange"
    :value="value"
    @--change="onChange"
  ></sinch-date-picker>
</template>

<script>
import '@nectary/components/date-picker'

export default {
  methods: {
    onChange(e) {
      this.value = e.detail
      window.dispatchEvent(new CustomEvent('sinch-date-picker-change', {detail: e.detail}))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    locale() {
      return this.$route.query.locale
    },
    min() {
      return this.$route.query.min
    },
    max() {
      return this.$route.query.max
    },
    isRange() {
      return this.$route.query.range != null
    }
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>

