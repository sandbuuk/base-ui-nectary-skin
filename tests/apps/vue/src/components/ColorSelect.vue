<template>
  <sinch-popover
    :open="isOpen"
    @--close="onClose"
    orientation="bottom-right"
    modal
  >
    <sinch-select-button
      slot="target"
      placeholder="Select color"
      aria-label="Select color"
      :text="value"
      :disabled="isDisabled"
      :invalid="isInvalid"
      @--click="onClick"
    >
      <sinch-color-swatch slot="icon" :name="value"></sinch-color-swatch>
    </sinch-select-button>
    <sinch-color-menu
      slot="content"
      :colors="colors"
      :rows="rows"
      :cols="cols"
      :value="value"
      @--change="onChange"
      aria-label="Menu"
    ></sinch-color-menu>
  </sinch-popover>
</template>

<script>
import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary/color-menu'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-color-menu-change', {detail: e.detail}))
      this.value = e.detail
      this.isOpen = false
    },
    onClick() {
      this.isOpen = true
    },
    onClose() {
      this.isOpen = false
    }
  },
  computed: {
    rows() {
      const val = this.search.get('rows')
      return val !== null ? parseInt(val) : null
    },
    cols() {
      const val = this.search.get('cols')
      return val !== null ? parseInt(val) : null
    },
    colors() {
      return this.search.get('colors')
    },
    isInvalid() {
      return this.search.get('invalid') !== null
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    }
  },
  data() {
    return {
      isOpen: false,
      value: this.search.get('value') ?? NO_COLOR
    }
  }
}
</script>

