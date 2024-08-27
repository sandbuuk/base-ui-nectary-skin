<template>
  <sinch-segmented-control :value="value" @--change="onChange">
    <sinch-segmented-control-option value="1" text="Option value 1">
      <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"></sinch-icon>
    </sinch-segmented-control-option>
    <template v-if="!isSingleOption">
      <sinch-segmented-control-option value="2" text="Option value 2" disabled>
        <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"></sinch-icon>
      </sinch-segmented-control-option>
      <sinch-segmented-control-option value="3" text="Option value 3"></sinch-segmented-control-option>
      <sinch-segmented-control-option value="4" text="Option value 4"></sinch-segmented-control-option>
    </template>
  </sinch-segmented-control>
</template>

<script>
import '@nectary/components/segmented-control'
import '@nectary/components/segmented-control-option'
import '@nectary/components/icon'

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-segmented-control-change', {detail: e.detail}))
      }
    }
  },
  computed: {
    isControlled() {
      return this.$route.query.uncontrolled == null
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
