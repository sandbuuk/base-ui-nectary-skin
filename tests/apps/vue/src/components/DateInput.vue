<template>
  <sinch-date-input
    :placeholder="placeholderText"
    :label="labelText"
    :optionaltext="optionalText"
    :additionaltext="additionalText"
    :invalidtext="invalidText"
    :disabled="isDisabled"
    :locale="locale"
    :min="min"
    :max="max"
    :value="value"
    @--change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-help-tooltip v-if="tooltipText != null" v-bind:text="tooltipText" slot="tooltip"></sinch-help-tooltip>
  </sinch-date-input>
</template>

<script>
import '@sinch-engage/nectary/date-input'
import '@sinch-engage/nectary/help-tooltip'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-date-input-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-date-input-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-date-input-blur'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    placeholderText() {
      return this.search.get('placeholder')
    },
    tooltipText() {
      return this.search.get('tooltip')
    },
    labelText() {
      return this.search.get('label')
    },
    optionalText() {
      return this.search.get('optional')
    },
    additionalText() {
      return this.search.get('additional')
    },
    invalidText() {
      return this.search.get('invalid')
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    locale() {
      return this.search.get('locale')
    },
    min() {
      return this.search.get('min')
    },
    max() {
      return this.search.get('max')
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

