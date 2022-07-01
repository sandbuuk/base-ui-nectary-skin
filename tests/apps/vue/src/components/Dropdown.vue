<template>
  <sinch-dropdown
    :open="isOpen"
    :multiple="isMultiple"
    :orientation="orientation"
    :maxvisibleitems="maxVisibleItems"
    :value="value"
    @close="onClose"
    @change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-button
      slot="target"
      type="cta-secondary"
      text="Some content"
      aria-label="Button"
      @click="onOpen"
    ></sinch-button>
    <template v-if="isCheckbox">
      <sinch-dropdown-checkbox-option value="1" text="Option 1 value long long long" slot="option" aria-label="Option 1"></sinch-dropdown-checkbox-option>
      <sinch-dropdown-checkbox-option disabled value="2" text="Option 2" slot="option" aria-label="Option 2"></sinch-dropdown-checkbox-option>
      <sinch-dropdown-checkbox-option value="3" text="Option 3" slot="option" aria-label="Option 3"></sinch-dropdown-checkbox-option>
      <sinch-dropdown-checkbox-option value="4" text="Option 4" slot="option" aria-label="Option 4"></sinch-dropdown-checkbox-option>
    </template>
    <template v-if="isRadio">
      <sinch-dropdown-radio-option value="1" text="Option 1 value long long long" slot="option" aria-label="Option 1"></sinch-dropdown-radio-option>
      <sinch-dropdown-radio-option disabled value="2" text="Option 2" slot="option" aria-label="Option 2"></sinch-dropdown-radio-option>
      <sinch-dropdown-radio-option value="3" text="Option 3" slot="option" aria-label="Option 3"></sinch-dropdown-radio-option>
      <sinch-dropdown-radio-option value="4" text="Option 4" slot="option" aria-label="Option 4"></sinch-dropdown-radio-option>
    </template>
    <template v-if="!isRadio && !isCheckbox">
      <sinch-dropdown-text-option value="1" text="Option 1 value long long long" slot="option">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-dropdown-text-option>
      <sinch-dropdown-text-option value="2" text="Option 2 value" slot="option" disabled>
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-dropdown-text-option>
      <sinch-dropdown-text-option value="3" text="Option 3 value" slot="option"></sinch-dropdown-text-option>
      <sinch-dropdown-text-option value="4" text="Option 4 value" slot="option"></sinch-dropdown-text-option>
    </template>
  </sinch-dropdown>
</template>

<script>
import '@sinch-engage/nectary/dropdown'
import '@sinch-engage/nectary/dropdown-text-option'
import '@sinch-engage/nectary/dropdown-checkbox-option'
import '@sinch-engage/nectary/dropdown-radio-option'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
      }
      window.dispatchEvent(new CustomEvent('sinch-dropdown-change', {detail: e.detail}))
      if (this.search.get('multiple') === null) {
        this.isOpen = false
      }
    },
    onClose() {
      window.dispatchEvent(new CustomEvent('sinch-dropdown-close'))
      this.isOpen = false
    },
    onOpen() {
      this.isOpen = true
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-dropdown-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-dropdown-blur'))
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
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    isMultiple() {
      return this.search.get('multiple') !== null
    },
    isCheckbox() {
      return this.search.get('checkbox') !== null
    },
    isRadio() {
      return this.search.get('radio') !== null
    },
  },
  data() {
    return {
      value: this.search.get('value') ?? '',
      isOpen: this.search.get('open') !== null
    }
  }
}
</script>

