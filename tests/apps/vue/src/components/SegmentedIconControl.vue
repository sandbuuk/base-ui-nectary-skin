<template>
  <sinch-segmented-icon-control :multiple="isMultiple" :value="value" @--change="onChange">
    <sinch-segmented-icon-control-option value="1">
      <sinch-icon-format-align-right slot="icon"></sinch-icon-format-align-right>
    </sinch-segmented-icon-control-option>
    <template v-if="!isSingleOption">
      <sinch-segmented-icon-control-option disabled value="2">
        <sinch-icon-format-align-center slot="icon"></sinch-icon-format-align-center>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="3">
        <sinch-icon-format-align-left slot="icon"></sinch-icon-format-align-left>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="4">
        <sinch-icon-format-align-justify slot="icon"></sinch-icon-format-align-justify>
      </sinch-segmented-icon-control-option>
    </template>
  </sinch-segmented-icon-control>
</template>

<script>
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/assets/icons/format-align-center'
import '@nectary/assets/icons/format-align-justify'
import '@nectary/assets/icons/format-align-right'
import '@nectary/assets/icons/format-align-left'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-segmented-icon-control-change', {detail: e.detail}))
      }
    }
  },
  computed: {
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    isMultiple() {
      return this.search.get('multiple') !== null
    },
    isSingleOption() {
      return this.search.get('single-option') !== null
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

