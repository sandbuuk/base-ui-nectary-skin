<template>
  <sinch-popover
    :open="isOpen"
    orientation="bottom"
    aria-label="Search"
    @--close="onClose"
  >
    <sinch-field slot="target" label="Label">
      <sinch-input
        slot="input"
        aria-label="Search input"
        placeholder="Search input"
        :value="value"
        @--change="onChange"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-search slot="icon"></sinch-icon-search>
      </sinch-input>
    </sinch-field>
    <sinch-action-menu slot="content" aria-label="Search autocomplete">
      <sinch-action-menu-option
        v-for="text in options"
        :key="text"
        :text="text"
        :aria-label="text"
        @--click="onOptionClick(text)"
      ></sinch-action-menu-option>
    </sinch-action-menu>
  </sinch-popover>
</template>

<script>
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/close'

export default {
  methods: {
    onChange(e) {
      this.value = e.detail
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-search-focus'))
      this.isOpen = true
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-search-blur'))
    },
    onClose() {
      this.isOpen = false
    },
    onOptionClick(text) {
      window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: text }))

      this.value = text
      this.isOpen = false
    }
  },
  props: {
    search: URLSearchParams
  },
  data() {
    return {
      value: this.search.get('value') ?? '',
      isOpen: false,
      options: [
        'Option 1 value long long long',
        'Option 2',
        'Option 3',
        'Option 4',
      ]
    }
  }
}
</script>
