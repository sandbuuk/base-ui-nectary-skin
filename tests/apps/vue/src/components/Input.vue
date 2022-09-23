<template>
  <sinch-input
    :placeholder="placeholderText"
    :disabled="isDisabled"
    :invalid="isInvalid"
    :type="type"
    :value="value"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
    <sinch-icon-search v-if="hasIcon" slot="icon"></sinch-icon-search>
    <sinch-tag v-if="hasRight" slot="right" text="text" color="light-grey"></sinch-tag>
    <sinch-icon-button v-if="hasRight" slot="right" small>
      <sinch-icon-close slot="icon"></sinch-icon-close>
    </sinch-icon-button>
  </sinch-input>
</template>

<script>
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/search'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-input-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-input-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-input-blur'))
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
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    type() {
      return this.search.get('type')
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    hasRight() {
      return this.search.get('right') !== null
    },
    hasIcon() {
      return this.search.get('icon') !== null
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

