<template>
  <sinch-card
    :caption="header"
    :text="text"
    :label="label">
    <sinch-icon-branded-chatbot v-if="hasIcon" slot="icon"></sinch-icon-branded-chatbot>
    <sinch-illustration-phone-and-cat v-if="hasIllustration" size="290" :background="background" valign="top" slot="illustration"></sinch-illustration-phone-and-cat>
    <sinch-button v-if="buttonText !== null" type="primary" :text="buttonText" slot="action"></sinch-button>
    <sinch-link v-if="linkText !== null" :text="linkText" slot="action" preventdefault standalone></sinch-link>
  </sinch-card>
</template>

<script>
import '@nectary/components/card'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/components/button'
import '@nectary/components/link'

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

