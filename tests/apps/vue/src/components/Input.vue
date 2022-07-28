<template>
  <sinch-input
    :placeholder="placeholderText"
    :label="labelText"
    :optionaltext="optionalText"
    :additionaltext="additionalText"
    :invalidtext="invalidText"
    :disabled="isDisabled"
    :type="type"
    :value="value"
    @change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-help-tooltip v-if="tooltipText != null" v-bind:text="tooltipText" slot="tooltip"></sinch-help-tooltip>
    <sinch-icon-button v-if="hasRightButton" slot="right" small>
      <sinch-icon-calendar-today slot="icon"></sinch-icon-calendar-today>
    </sinch-icon-button>
  </sinch-input>
</template>

<script>
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

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
    type() {
      return this.search.get('type')
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    hasRightButton() {
      return this.search.get('right') !== null
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

