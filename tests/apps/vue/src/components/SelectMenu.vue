<template>
  <sinch-select-menu
    :rows="rows"
    :multiple="isMultiple"
    :value="value"
    @--change="onChange">
    <sinch-select-menu-option
      v-for="[key, value] in items"
      :key="key"
      :value="key"
      :text="value.text"
      :disabled="value.isDisabled"
    >
      <sinch-icon-open-in-new v-if="value.icon === '1'" slot="icon"></sinch-icon-open-in-new>
    </sinch-select-menu-option>
  </sinch-select-menu>
</template>

<script>
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/icons/open-in-new'

const options = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
  5: { text: 'Option 1 value long long long', icon: '1' },
  6: { text: 'Option 2', icon: '1', isDisabled: true },
  7: { text: 'Option 3', icon: null },
  8: { text: 'Option 4', icon: null },
  9: { text: 'Option 1 value long long long', icon: '1' },
  10: { text: 'Option 2', icon: '1', isDisabled: true },
  11: { text: 'Option 3', icon: null },
  12: { text: 'Option 4', icon: null },
  13: { text: 'Option 1 value long long long', icon: '1' },
  14: { text: 'Option 2', icon: '1', isDisabled: true },
  15: { text: 'Option 3', icon: null },
  16: { text: 'Option 4', icon: null },
  17: { text: 'Option 1 value long long long', icon: '1' },
  18: { text: 'Option 2', icon: '1', isDisabled: true },
  19: { text: 'Option 3', icon: null },
  20: { text: 'Option 4', icon: null },
}

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: e.detail}))
      this.value = e.detail
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    rows() {
      const val = this.search.get('rows')
      return val !== null ? parseInt(val) : null
    },
    isMultiple() {
      return this.search.get('multiple') !== null
    },
    items() {
      return this.search.get('example') === 'lots'
        ? Object.entries(options)
        : Object.entries(options).slice(0, 4)
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>
