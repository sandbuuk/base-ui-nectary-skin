<template>
  <sinch-segmented-icon-control :multiple="isMultiple" :value="value" @--change="onChange">
    <sinch-segmented-icon-control-option value="1">
      <sinch-icon icons-version="2" name="fa-align-right" slot="icon"></sinch-icon>
    </sinch-segmented-icon-control-option>
    <template v-if="!isSingleOption">
      <sinch-segmented-icon-control-option disabled value="2">
        <sinch-icon icons-version="2" name="fa-align-center" slot="icon"></sinch-icon>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="3">
        <sinch-icon icons-version="2" name="fa-align-left" slot="icon"></sinch-icon>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="4">
        <sinch-icon icons-version="2" name="fa-align-justify" slot="icon"></sinch-icon>
      </sinch-segmented-icon-control-option>
    </template>
  </sinch-segmented-icon-control>
</template>

<script>
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/components/icon'

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
