<template>
  <sinch-card
    :header="header"
    :text="text"
    :label="label"
    :disabled="isDisabled">
    <sinch-icon-chatbot v-if="hasIcon" size="48" slot="icon"></sinch-icon-chatbot>
    <sinch-illustration-phone-and-cat v-if="hasIllustration" size="256" slot="illustration"></sinch-illustration-phone-and-cat>
    <sinch-card-button v-if="buttonText !== null" :text="buttonText" slot="action"></sinch-card-button>
    <sinch-card-link v-if="linkText !== null" :text="linkText" slot="action"></sinch-card-link>
  </sinch-card>
</template>

<script>
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
  }
}
</script>

