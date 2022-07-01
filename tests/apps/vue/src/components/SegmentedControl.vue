<template>
  <sinch-segmented-control :value="value" @change="onChange">
    <sinch-segmented-control-option value="1" text="Option value 1">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-segmented-control-option>
    <template v-if="!isSingleOption">
      <sinch-segmented-control-option value="2" text="Option value 2" disabled>
        <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
      </sinch-segmented-control-option>
      <sinch-segmented-control-option value="3" text="Option value 3"></sinch-segmented-control-option>
      <sinch-segmented-control-option value="4" text="Option value 4"></sinch-segmented-control-option>
    </template>
  </sinch-segmented-control>
</template>

<script>
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'
import '@sinch-engage/nectary/icons/open-in-new'

export default {
  props: {
    search: URLSearchParams
  },
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
      return this.search.get('uncontrolled') === null
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

