<template>
  <sinch-date-picker
    :name="name"
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
import { getSearchKey } from '../utils'
export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'date-picker'
    }
  },
  methods: {
    onChange(e) {
      this.value = e.detail
      window.dispatchEvent(new CustomEvent('sinch-date-picker-change', {detail: e.detail}))
    },
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    }
  },
  computed: {
    name() {
      return this.getSearchParam('name')
    },
    locale() {
      return this.getSearchParam('locale')
    },
    min() {
      return this.getSearchParam('min')
    },
    max() {
      return this.getSearchParam('max')
    },
    isRange() {
      return this.getSearchParam('range') != null
    }
  },
  data() {
    return {
      value: this.getSearchParam('value') ?? ''
    }
  }
}
</script>

