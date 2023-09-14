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
      return this.search.get('locale')
    },
    min() {
      return this.search.get('min')
    },
    max() {
      return this.search.get('max')
    },
    isRange() {
      return this.search.get('range') !== null
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

