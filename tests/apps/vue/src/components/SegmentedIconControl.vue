<template>
  <sinch-segmented-icon-control :multiple="isMultiple" :value="value" @--change="onChange">
    <sinch-segmented-icon-control-option value="1">
      <sinch-icon-fa-align-right slot="icon"></sinch-icon-fa-align-right>
    </sinch-segmented-icon-control-option>
    <template v-if="!isSingleOption">
      <sinch-segmented-icon-control-option disabled value="2">
        <sinch-icon-fa-align-center slot="icon"></sinch-icon-fa-align-center>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="3">
        <sinch-icon-fa-align-left slot="icon"></sinch-icon-fa-align-left>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="4">
        <sinch-icon-fa-align-justify slot="icon"></sinch-icon-fa-align-justify>
      </sinch-segmented-icon-control-option>
    </template>
  </sinch-segmented-icon-control>
</template>

<script>
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/assets/icons/fa-align-center'
import '@nectary/assets/icons/fa-align-justify'
import '@nectary/assets/icons/fa-align-right'
import '@nectary/assets/icons/fa-align-left'

export default {
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
      return this.$route.query.uncontrolled == null
    },
    isMultiple() {
      return this.$route.query.multiple != null
    },
    isSingleOption() {
      return this.$route.query['single-option'] != null
    }
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>

