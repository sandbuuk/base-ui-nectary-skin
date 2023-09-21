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
      :rows="rows"
      :cols="cols"
      :value="value"
      @--change="onChange"
      aria-label="Menu"
    >
      <sinch-color-menu-option v-for="col in colors" :key="col" :value="col"></sinch-color-menu-option>
    </sinch-color-menu>
  </sinch-popover>
</template>

<script>
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/color-swatch'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const colors = [...lightColors, ...vibrantColors, ...darkColors]

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
      const val = this.$route.query.rows
      return val != null ? parseInt(val) : null
    },
    cols() {
      const val = this.$route.query.cols
      return val != null ? parseInt(val) : null
    },
    colors() {
      return colors
    },
    isInvalid() {
      return this.$route.query.invalid != null
    },
    isDisabled() {
      return this.$route.query.disabled != null
    }
  },
  data() {
    return {
      isOpen: false,
      value: this.$route.query.value ?? ''
    }
  }
}
</script>

