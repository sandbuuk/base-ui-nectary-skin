<template>
  <sinch-popover
    :open="isOpen"
    @--close="onClose"
    orientation="bottom-right">
    <sinch-button
      slot="target"
      type="cta-primary"
      text="Open actions"
      aria-label="Open actions"
      @--focus="onFocus"
      @--blur="onBlur"
      @--click="onOpen"
    ></sinch-button>
    <sinch-action-menu :rows="rows" slot="content">
      <sinch-action-menu-option
        v-for="(value, key) in options"
        :key="key"
        :value="key"
        :text="value.text"
        :disabled="value.isDisabled"
        @--click="onClick(key)">
        <sinch-icon-open-in-new v-if="value.icon === '1'" slot="icon"></sinch-icon-open-in-new>
      </sinch-action-menu-option>
    </sinch-action-menu>
  </sinch-popover>
</template>

<script>
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary-assets/icons/open-in-new'

export default {
  methods: {
    onClick(value) {
      window.dispatchEvent(new CustomEvent('sinch-action-dropdown-click', {detail: value}))
      this.isOpen = false
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-action-dropdown-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-action-dropdown-blur'))
    },
    onOpen() {
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
    }
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

