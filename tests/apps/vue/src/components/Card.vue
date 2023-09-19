<template>
  <sinch-card
    :caption="header"
    :text="text"
    :label="label">
    <sinch-icon-branded-chatbot v-if="hasIcon" slot="icon"></sinch-icon-branded-chatbot>
    <sinch-illustration-phone-and-cat v-if="hasIllustration" size="290" :background="background" valign="top" slot="illustration"></sinch-illustration-phone-and-cat>
    <sinch-button v-if="buttonText != null" type="primary" :text="buttonText" slot="action"></sinch-button>
    <sinch-link v-if="linkText != null" :text="linkText" slot="action" preventdefault standalone></sinch-link>
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
      return this.$route.query.header
    },
    text() {
      return this.$route.query.text
    },
    label() {
      return this.$route.query.label
    },
    hasIcon() {
      return this.$route.query.icon != null
    },
    hasIllustration() {
      return this.$route.query.illustration != null
    },
    buttonText() {
      return this.$route.query.button
    },
    linkText() {
      return this.$route.query.link
    },
    background() {
      return this.$route.query.bg
    },
  }
}
</script>

