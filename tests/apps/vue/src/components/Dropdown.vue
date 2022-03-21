<template>
  <sinch-dropdown
    :orientation="orientation"
    :disabled="isDisabled"
    :maxvisibleitems="maxVisibleItems"
    :value="value"
    @change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-button
      slot="target"
      type="cta-secondary"
      text="Some content"
      aria-label="Button">
    </sinch-button>
    <sinch-dropdown-option value="1" text="Option 1 value long long long" slot="option">
      <sinch-icon-open-in-new slot="icon" size="20"/>
    </sinch-dropdown-option>
    <sinch-dropdown-option value="2" text="Option 2 value" slot="option" disabled>
      <sinch-icon-open-in-new slot="icon" size="20"/>
    </sinch-dropdown-option>
    <sinch-dropdown-option value="3" text="Option 3 value" slot="option"/>
    <sinch-dropdown-option value="4" text="Option 4 value" slot="option"/>
  </sinch-dropdown>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
      }
      window.dispatchEvent(new CustomEvent('sinch-dropdown-change', {detail: e.detail}))
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
    isDisabled() {
      return this.search.get('disabled') !== null
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

