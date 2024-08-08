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
    <sinch-icon-fa-magnifying-glass slot="icon"></sinch-icon-fa-magnifying-glass>
    <sinch-tag slot="right" text="text"></sinch-tag>
  </sinch-input>
</sinch-field>
</template>

<script>
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/help-tooltip'
import '@nectary/components/tag'
import '@nectary/assets/icons/fa-magnifying-glass'

export default {
  methods: {
    onChange(e) {
      this.value = e.detail
    }
  },
  computed: {
    placeholderText() {
      return this.$route.query.placeholder
    },
    tooltipText() {
      return this.$route.query.tooltip
    },
    labelText() {
      return this.$route.query.label
    },
    optionalText() {
      return this.$route.query.optional
    },
    additionalText() {
      return this.$route.query.additional
    },
    invalidText() {
      return this.$route.query.invalid
    },
    isDisabled() {
      return this.$route.query.disabled != null
    }
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>

