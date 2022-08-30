<template>
  <sinch-action-menu
    :open="isOpen"
    :modal="isModal"
    :orientation="orientation"
    :maxvisibleitems="maxVisibleItems"
    @--close="onClose">
    <sinch-field slot="target" label="Input">
      <sinch-input
        slot="input"
        aria-label="Input"
        :value="value"
        @--change="onValueChange">
        <sinch-button
          slot="right"
          small
          type="cta-secondary"
          text="Open"
          aria-label="Open"
          @--click="onOpen"
        ></sinch-button>
      </sinch-input>
    </sinch-field>
    <sinch-action-menu-option @--click="() => {onClick('Option 1 value long long long')}" text="Option 1 value long long long" slot="option">
      <sinch-icon-open-in-new slot="icon"/>
    </sinch-action-menu-option>
    <sinch-action-menu-option @--click="() => {onClick('Option 2 value')}" text="Option 2 value" slot="option" disabled>
      <sinch-icon-open-in-new slot="icon"/>
    </sinch-action-menu-option>
    <sinch-action-menu-option @--click="() => {onClick('Option 3 value')}" text="Option 3 value" slot="option"></sinch-action-menu-option>
    <sinch-action-menu-option @--click="() => {onClick('Option 4 value')}" text="Option 4 value" slot="option"></sinch-action-menu-option>
  </sinch-action-menu>
</template>

<script>
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/button'

export default {
  methods: {
    onClick(text) {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-click', {detail: text}))
      this.isOpen = false
    },
    onClose() {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-close'))
      this.isOpen = false
    },
    onOpen() {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-open'))
      this.isOpen = true
    },
    onValueChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-input-change'))
      this.value = e.detail
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    orientation() {
      return this.search.get('orientation')
    },
    maxVisibleItems() {
      const val = this.search.get('maxvisibleitems')
      return val !== null ? parseInt(val) : null
    },
    isModal() {
      return this.search.get('modal') !== null
    },
  },
  data() {
    return {
      value: '',
      isOpen: this.search.get('open') !== null
    }
  }
}
</script>

