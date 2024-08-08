<template>
    <sinch-popover
      :open="isOpen"
      orientation="bottom"
    modal
      @--close="onClose"
    >
    <sinch-field
      slot="target"
      label="Select"
      :disabled="isDisabled"
      :invalidtext="isInvalid ? 'Invalid option selected' : ''"
    >
      <sinch-select-button
        slot="input"
        placeholder="Select option"
        :size="size"
        :text="inputText"
        :disabled="isDisabled"
        :invalid="isInvalid"
        @--click="onClick"
        @--focus="onFocus"
        @--blur="onBlur"
      >
        <sinch-tag v-if="hasLeft" slot="left" text="tag"></sinch-tag>
        <sinch-icon-fa-magnifying-glass v-if="hasIcon" slot="icon"></sinch-icon-fa-magnifying-glass>
        <sinch-icon-fa-arrow-up-right-from-square v-if="items[value]?.icon === '1'" slot="icon"></sinch-icon-fa-arrow-up-right-from-square>
      </sinch-select-button>
    </sinch-field>
    <sinch-select-menu
      slot="content"
      :rows="rows"
      :value="value"
      @--change="onChange">
      <sinch-select-menu-option
        v-for="(value, key) in items"
        :key="key"
        :value="key"
        :text="value.text"
        :disabled="value.isDisabled"
      >
        <sinch-icon-fa-arrow-up-right-from-square v-if="value.icon === '1'" slot="icon"></sinch-icon-fa-arrow-up-right-from-square>
      </sinch-select-menu-option>
    </sinch-select-menu>
  </sinch-popover>
</template>

<script>
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/select-button'
import '@nectary/components/popover'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/tag'
import '@nectary/assets/icons/fa-arrow-up-right-from-square'
import '@nectary/assets/icons/fa-magnifying-glass'

const optionsLong = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
  5: { text: 'Option 1 value long long long', icon: '1' },
  6: { text: 'Option 2', icon: '1', isDisabled: true },
  7: { text: 'Option 3', icon: null },
  8: { text: 'Option 4', icon: null },
}

const optionsShort = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
}

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-select-change', {detail: e.detail}))
      this.value = e.detail
      this.isOpen = false
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-select-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-select-blur'))
    },
    onClick() {
      window.dispatchEvent(new CustomEvent('sinch-select-click'))
      this.isOpen = !this.isOpen
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
    items() {
      return this.$route.query.example === 'lots'
        ? optionsLong
        : optionsShort
    },
    inputText() {
      return this.items[this.value]?.text ?? ''
    },
    size() {
      return this.$route.query.size
    },
    hasLeft() {
      return this.$route.query.left != null
    },
    hasIcon() {
      return this.$route.query.icon != null
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
