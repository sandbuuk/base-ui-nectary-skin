<template>
  <sinch-popover
    :open="isOpen"
    orientation="bottom"
    modal
    @--close="onClose"
  >
    <sinch-field
      slot="target"
      label="Select"
      :disabled="isDisabled"
      :invalidtext="isInvalid ? 'Invalid option selected' : ''">
      <sinch-select-button
        slot="input"
        placeholder="Select option"
        :text="inputText"
        :disabled="isDisabled"
        :invalid="isInvalid"
        @--click="onClick"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-open-in-new v-if="options[value] != null && options[value].icon === '1'" slot="icon"></sinch-icon-open-in-new>
        <sinch-icon-keyboard-arrow-down slot="right"></sinch-icon-keyboard-arrow-down>
      </sinch-select-button>
      </sinch-field>
    <sinch-select-menu
      slot="content"
      :rows="rows"
      :value="value"
      @--change="onChange">
      <sinch-select-menu-option
        v-for="(value, key) in options"
        :key="key"
        :value="key"
        :text="value.text"
        :disabled="value.isDisabled"
      >
        <sinch-icon-open-in-new v-if="value.icon === '1'" slot="icon"></sinch-icon-open-in-new>
      </sinch-select-menu-option>
    </sinch-select-menu>
  </sinch-popover>
</template>

<script>
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/icons/keyboard-arrow-down'
import '@sinch-engage/nectary/icons/open-in-new'

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-select-change', {detail: e.detail}))
      this.value = e.detail
      this.isOpen = false
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-select-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-select-blur'))
    },
    onClick() {
      window.dispatchEvent(new CustomEvent('sinch-select-click'))
      this.isOpen = !this.isOpen
    },
    onClose() {
      this.isOpen = false
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
    options() {
      return {
        1: { text: 'Option 1 value long long long', icon: '1' },
        2: { text: 'Option 2', icon: '1', isDisabled: true },
        3: { text: 'Option 3', icon: null },
        4: { text: 'Option 4', icon: null },
      }
    },
    inputText() {
      return this.options[this.value]?.text ?? ''
    },
    isInvalid() {
      return this.search.get('invalid') !== null
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    }
  },
  data() {
    return {
      isOpen: false,
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

