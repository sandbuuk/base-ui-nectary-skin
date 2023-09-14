<template>
  <sinch-tabs v-if="example=='single-icon'" :value="value" @--change="onChange" aria-label="Tabs">
    <sinch-tabs-icon-option
      aria-label="Tab"
      :value="1"
      :disabled="isDisabled">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-icon-option>
  </sinch-tabs>
  <sinch-tabs v-if="example=='single'" :value="value" @--change="onChange" aria-label="Tabs">
    <sinch-tabs-option
      aria-label="Tab"
      text="Tab label"
      :value="1"
      :disabled="isDisabled">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-option>
  </sinch-tabs>
  <sinch-tabs v-if="example=='icons'" :value="value" @--change="onChange" aria-label="Tabs">
    <sinch-tabs-icon-option value="1">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-icon-option>
    <sinch-tabs-icon-option value="2" disabled>
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-icon-option>
    <sinch-tabs-icon-option value="3">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-icon-option>
    <sinch-tabs-icon-option value="4">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-icon-option>
  </sinch-tabs>
  <sinch-tabs v-if="example==null" :value="value" @--change="onChange" aria-label="Tabs">
    <sinch-tabs-option value="1" text="Short">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-option>
    <sinch-tabs-option value="2" text="Option value 2" disabled>
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-option>
    <sinch-tabs-option value="3" text="Long option text text"></sinch-tabs-option>
    <sinch-tabs-option value="4" text="Option value 4"></sinch-tabs-option>
  </sinch-tabs>
</template>

<script>
import '@nectary/components/tabs'
import '@nectary/components/tabs-option'
import '@nectary/components/tabs-icon-option'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      this.value = e.detail
      window.dispatchEvent(new CustomEvent('sinch-tabs-change', {detail: e.detail}))
    }
  },
  computed: {
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    example() {
      return this.search.get('example')
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

