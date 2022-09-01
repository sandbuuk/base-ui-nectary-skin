<template>
  <sinch-select
    :placeholder="placeholderText"
    :invalid="isInvalid"
    :disabled="isDisabled"
    :maxvisibleitems="maxVisibleItems"
    :value="value"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
    <sinch-select-option value="1" text="Option 1 value" slot="option">
      <sinch-icon-open-in-new slot="icon"/>
    </sinch-select-option>
    <sinch-select-option value="2" text="Option 2 value" slot="option" disabled>
      <sinch-icon-open-in-new slot="icon"/>
    </sinch-select-option>
    <sinch-select-option value="3" text="Option 3 value" slot="option"/>
    <sinch-select-option value="4" text="Option 4 value" slot="option"/>
  </sinch-select>
</template>

<script>
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/select-option'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-select-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-select-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-select-blur'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    placeholderText() {
      return this.search.get('placeholder')
    },
    isInvalid() {
      return this.search.get('invalid') !== null
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

