<template>
  <sinch-checkbox
    :name="name"
    :value="value"
    :text="text"
    :disabled="isDisabled"
    :indeterminate="isIndeterminate"
    :invalid="isInvalid"
    :checked="checked"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
  </sinch-checkbox>
</template>

<script>
import '@nectary/components/checkbox'
import { getSearchKey } from '../utils'
export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'checkbox'
    }
  },
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.checked = e.detail
        window.dispatchEvent(new CustomEvent('sinch-checkbox-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-checkbox-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-checkbox-blur'))
    },
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    }
  },
  computed: {
    name() {
      return this.getSearchParam('name')
    },
    value() {
      return this.getSearchParam('value')
    },
    text() {
      return this.getSearchParam('text')
    },
    isDisabled() {
      return this.getSearchParam('disabled') != null
    },
    isIndeterminate() {
      return this.getSearchParam('indeterminate') != null
    },
    isInvalid() {
      return this.getSearchParam('invalid') != null
    },
    isControlled() {
      return this.getSearchParam('uncontrolled') == null
    },
  },
  data() {
    return {
      checked: this.getSearchParam('checked') != null
    }
  }
}
</script>

