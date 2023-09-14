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
  </sinch-input>
</sinch-field>
</template>

<script>
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/help-tooltip'
import '@nectary/components/tag'
import '@nectary/assets/icons/search'

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

