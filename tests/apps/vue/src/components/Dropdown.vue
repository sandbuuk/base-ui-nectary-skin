<template>
  <sinch-dropdown
    :open="isOpen"
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
    <sinch-dropdown-option value="1" text="Option 1 value long long long" slot="option">
      <sinch-icon-open-in-new slot="icon"/>
    </sinch-dropdown-option>
    <sinch-dropdown-option value="2" text="Option 2 value" slot="option" disabled>
      <sinch-icon-open-in-new slot="icon"/>
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
      this.isOpen = false
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
  },
  data() {
    console.log('DATA')
    return {
      value: this.search.get('value') ?? '',
      isOpen: this.search.get('open') !== null
    }
  }
}
</script>

