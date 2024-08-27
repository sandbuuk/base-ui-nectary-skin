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
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/assets/icons/open-in-new'

const options = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
  5: { text: 'Option 1 value long long long', icon: '1' },
  6: { text: 'Option 2', icon: '1', isDisabled: true },
  7: { text: 'Option 3', icon: null },
  8: { text: 'Option 4', icon: null },
}

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: e.detail}))
      this.value = e.detail
    }
  },
  computed: {
    rows() {
      const val = this.$route.query.rows
      return val != null ? parseInt(val) : null
    },
    isMultiple() {
      return this.$route.query.multiple != null
    },
    items() {
      return this.$route.query.example === 'lots'
        ? Object.entries(options)
        : Object.entries(options).slice(0, 4)
    }
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>
