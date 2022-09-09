<template>
  <sinch-card
    :caption="header"
    :text="text"
    :label="label"
    :disabled="isDisabled">
    <sinch-icon-branded-chatbot v-if="hasIcon" slot="icon"></sinch-icon-branded-chatbot>
    <sinch-illustration-phone-and-cat v-if="hasIllustration" size="290" :background="background" valign="top" slot="illustration"></sinch-illustration-phone-and-cat>
    <sinch-button v-if="buttonText !== null" :type="primary" :text="buttonText" slot="action"></sinch-button>
    <sinch-link v-if="linkText !== null" :text="linkText" slot="action" preventdefault standalone></sinch-link>
  </sinch-card>
</template>

<script>
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/illustrations/phone-and-cat'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/link'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    header() {
      return this.search.get('header')
    },
    text() {
      return this.search.get('text')
    },
    label() {
      return this.search.get('label')
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    hasIcon() {
      return this.search.get('icon') !== null
    },
    hasIllustration() {
      return this.search.get('illustration') !== null
    },
    buttonText() {
      return this.search.get('button')
    },
    linkText() {
      return this.search.get('link')
    },
    background() {
      return this.search.get('bg')
    },
  }
}
</script>

