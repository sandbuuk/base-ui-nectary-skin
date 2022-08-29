<template>
  <sinch-action-menu
    orientation="bottom"
    :open="isOpen"
    :maxVisibleItems="maxVisibleItems"
    aria-label="Search"
    @--close="onClose">
    <sinch-input
      slot="target"
      aria-label="Search Input"
      :placeholder="placeholderText"
      :label="labelText"
      :optionaltext="optionalText"
      :additionaltext="additionalText"
      :invalidtext="invalidText"
      :disabled="isDisabled"
      :value="value"
      @--change="onChange"
      @--focus="onFocus"
      @--blur="onBlur">
      <sinch-icon-search slot="icon"></sinch-icon-search>
      <sinch-icon-button
        slot="right"
        small
        aria-label="Clear search"
        @--click="onClear">
        <sinch-icon-close slot="icon"></sinch-icon-close>
      </sinch-icon-button>
      <sinch-help-tooltip v-if="tooltipText != null" :text="tooltipText" slot="tooltip"></sinch-help-tooltip>
    </sinch-input>
    <sinch-action-menu-option
      v-for="text in options"
      slot="option"
      :key="text"
      :text="text"
      :aria-label="text"
      @--click="onOptionClick(text)"
    ></sinch-action-menu-option>
  </sinch-action-menu>
</template>

<script>
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/close'

export default {
  methods: {
    onChange(e) {
      this.value = e.detail

      if (e.detail.length >= 3) {
        this.isOpen = true
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-search-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-search-blur'))
    },
    onClear() {
      this.value = ''
      this.isOpen = false
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
  computed: {
    placeholderText() {
      return this.search.get('placeholder')
    },
    tooltipText() {
      return this.search.get('tooltip')
    },
    labelText() {
      return this.search.get('label')
    },
    optionalText() {
      return this.search.get('optional')
    },
    additionalText() {
      return this.search.get('additional')
    },
    invalidText() {
      return this.search.get('invalid')
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    maxVisibleItems() {
      const val = this.search.get('maxvisibleitems')
      return val !== null ? parseInt(val) : null
    },
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

