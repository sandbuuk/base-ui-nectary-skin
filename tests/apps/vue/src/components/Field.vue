<template>
<sinch-field
  :label="labelText"
  :optionaltext="optionalText"
  :additionaltext="additionalText"
  :invalidtext="invalidText"
>
  <sinch-help-tooltip
    v-if="tooltipText != null"
    slot="tooltip"
    :text="tooltipText"
  ></sinch-help-tooltip>
  <sinch-input
    slot="input"
    :placeholder="placeholderText"
    :disabled="isDisabled"
    :invalid="invalidText != null"
    :value="value"
    @--change="onChange">
    <sinch-icon-search slot="icon"></sinch-icon-search>
    <sinch-tag slot="right" text="text"></sinch-tag>
    <sinch-icon-button slot="right" small>
      <sinch-icon-close slot="icon"></sinch-icon-close>
    </sinch-icon-button>
  </sinch-input>
</sinch-field>
</template>

<script>
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/search'

export default {
  methods: {
    onChange(e) {
      this.value = e.detail
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
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

