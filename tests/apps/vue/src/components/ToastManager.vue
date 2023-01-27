<template>
  <sinch-toast-manager>
    <sinch-toast
      v-for="(t, i) in state"
      :key="t"
      :type="typeValues[i % typeValues.length]"
      :text="t"
      @--timeout="onTimeout(i)">
      <sinch-icon-button
        v-if="(i + 1) % 3 !== 0"
        slot="close"
        size="s"
        @--click="onClose(i)">
        <sinch-icon-close slot="icon"></sinch-icon-close>
      </sinch-icon-button>
      <sinch-button
        v-if="(i + 1) % 2 === 0"
        slot="action"
        type="cta-secondary"
        size="s"
        text="Undo"
        @--click="onAction">
      </sinch-button>
    </sinch-toast>
  </sinch-toast-manager>
</template>

<script>
import { typeValues } from '@sinch-engage/nectary/toast/utils'
import '@sinch-engage/nectary/toast-manager'
import '@sinch-engage/nectary/toast'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/close'

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting.'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    typeValues() {
      return typeValues
    },
  },
  data() {
    return {
      state: [`${text}1`, `${text}2`, `${text}3`, 'Item4']
    }
  },
  methods: {
    onTimeout(index) {
      this.state = this.state.filter((_, i) => i !== index)
      window.dispatchEvent(new CustomEvent('sinch-toast-timeout'))
    },
    onClose(index) {
      this.state = this.state.filter((_, i) => i !== index)
      window.dispatchEvent(new CustomEvent('sinch-toast-close'))
    },
    onAction() {
      window.dispatchEvent(new CustomEvent('sinch-toast-action'))
    },
    onPush() {
      this.state.push('Item5')
    }
  },
  mounted() {
    window.addEventListener('sinch-toast-push', this.onPush)
  },
  beforeunmount() {
    window.removeEventListener('sinch-toast-push', this.onPush)
  }
}
</script>
