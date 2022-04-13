<template>
  <sinch-search
    :label="label"
    :placeholder="placeholder"
    :maxvisibleitems="maxVisibleItems"
    :value="value"
    @change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
    <template v-if="value.length >= 5">
      <sinch-search-option text="Option 1 value long long long" slot="option"></sinch-search-option>
      <sinch-search-option text="Option 2 value" slot="option"></sinch-search-option>
      <sinch-search-option text="Option 3 value" slot="option"></sinch-search-option>
      <sinch-search-option text="Option 4 value" slot="option"></sinch-search-option>
    </template>
  </sinch-search>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
      }
      window.dispatchEvent(new CustomEvent('sinch-search-change', {detail: e.detail}))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-search-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-search-blur'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    label() {
      return this.search.get('label')
    },
    placeholder() {
      return this.search.get('placeholder')
    },
    maxVisibleItems() {
      const val = this.search.get('maxvisibleitems')
      return val !== null ? parseInt(val) : null
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

