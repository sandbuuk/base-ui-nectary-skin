<template>
  <sinch-popover :open="isOpen" orientation="bottom" aria-label="Search" @--close="onClose">
    <sinch-field slot="target" label="Label">
      <sinch-input slot="input" ref="input" aria-label="Search input" placeholder="Search input" :value="value"
        @--change="onChange" @--focus="onFocus" @--blur="onBlur">
        <sinch-icon name="magnifying-glass" slot="icon"></sinch-icon>
        <sinch-button v-if="isClearActive" slot="right" @--click="onClearClick">
          <sinch-icon name="fa-xmark" slot="icon"></sinch-icon>
        </sinch-button>
      </sinch-input>
    </sinch-field>
    <sinch-action-menu slot="content" aria-label="Search autocomplete">
      <sinch-action-menu-option v-for="text in options" :key="text" :text="text" :aria-label="text"
        @--click="onOptionClick(text)"></sinch-action-menu-option>
    </sinch-action-menu>
  </sinch-popover>
</template>

<script>
import '@nectary/components/popover'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/icon'

export default {
  methods: {
    onChange(e) {
      this.value = e.detail
      this.isClearActive = e.detail.length > 0
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-search-focus'))
      this.isOpen = true
      this.isClearActive = this.value.length > 0
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-search-blur'))
    },
    onClose() {
      this.isOpen = false
    },
    onClearClick() {
      this.value = ''
      this.isClearActive = false
      this.$refs.input.focus()
    },
    onOptionClick(text) {
      window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: text }))

      this.value = text
      this.isOpen = false
    }
  },
    data() {
    return {
      value: this.$route.query.value ?? '',
      isOpen: false,
      isClearActive: false,
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
