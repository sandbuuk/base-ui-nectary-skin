<template>
  <sinch-action-menu :rows="rows">
    <sinch-action-menu-option v-for="(value, key) in options" :key="key" :value="key" :text="value.text"
      :disabled="value.isDisabled" @--click="onClick(key)">
      <sinch-icon name="fa-arrow-up-right-from-square" v-if="value.icon === '1'" slot="icon"></sinch-icon>
    </sinch-action-menu-option>
  </sinch-action-menu>
</template>

<script>
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/icon'

export default {
  methods: {
    onClick(text) {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-click', {detail: text}))
    },
  },
  computed: {
    rows() {
      const val = this.$route.query.rows
      return val != null ? parseInt(val) : null
    },
    options() {
      return {
        1: { text: 'Option 1 value long long long', icon: '1' },
        2: { text: 'Option 2', icon: '1', isDisabled: true },
        3: { text: 'Option 3', icon: null },
        4: { text: 'Option 4', icon: null },
      }
    }
  }
}
</script>
