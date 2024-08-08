<template>
  <sinch-toast-manager origin="origin">
    <sinch-toast v-for="(t, i) in state" :key="t" :type="typeValues[i % typeValues.length]" :text="t"
      :persistent="i !== 0" @--timeout="onTimeout">
      <sinch-button v-if="(i + 1) % 3 !== 0" slot="close" size="s" @--click="onClose">
        <sinch-icon-fa-xmark slot="icon"></sinch-icon-fa-xmark>
      </sinch-button>
      <sinch-button v-if="(i + 1) % 2 === 0" slot="action" type="cta-secondary" size="s" text="Undo"
        @--click="onAction">
      </sinch-button>
    </sinch-toast>
  </sinch-toast-manager>
</template>

<script>
import { typeValues } from '@nectary/components/toast/utils'
import '@nectary/components/toast-manager'
import '@nectary/components/toast'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-xmark'

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting.'
const md = 'To set up the `LINE`, read and **accept** the `LINE` [terms & conditions](https://google.com).'

export default {
  computed: {
    typeValues() {
      return typeValues
    },
    origin() {
      return this.$route.query.origin
    },
    ignoreTimeout() {
      return this.$route.query['ignore-timeout'] !== null
    }
  },
  data() {
    return {
      state: [`${text}1`, `${text}2`, md, 'Item4']
    }
  },
  methods: {
    onTimeout() {
      window.dispatchEvent(new CustomEvent('sinch-toast-timeout'))
    },
    onClose() {
      window.dispatchEvent(new CustomEvent('sinch-toast-close'))
    },
    onAction() {
      window.dispatchEvent(new CustomEvent('sinch-toast-action'))
    },
    onPush() {
      this.state.push('Item5')
    },
    onPop() {
      this.state.splice(1, 1)
    }
  },
  mounted() {
    window.addEventListener('sinch-toast-push', this.onPush)
    window.addEventListener('sinch-toast-pop', this.onPop)
  },
  beforeunmount() {
    window.removeEventListener('sinch-toast-push', this.onPush)
    window.removeEventListener('sinch-toast-pop', this.onPop)
  }
}
</script>
