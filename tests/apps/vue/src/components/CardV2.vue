<template>
  <sinch-card-v2
    :selected="selected"
    :disabled="disabled"
    :clickable="clickable"
    @click="clickable ? handleCardClick : undefined"
  >
    <sinch-illustration-cat-texting
      v-if="hasIllustration"
      :size="290"
      :background="background"
      valign="top"
      slot="media"
    />
    <sinch-card-v2-title :text="title" slot="title" ellipsis>
      <sinch-icon-branded-chatbot v-if="hasIcon" slot="icon" />
    </sinch-card-v2-title>
    <sinch-text slot="content" type="m">{{ content }}</sinch-text>
    <sinch-button
      v-if="buttonText"
      slot="footer"
      type="primary"
      :text="buttonText"
      aria-label="Button"
      @click="handleButtonClick"
    />
    <sinch-link
      v-if="linkText"
      slot="footer"
      href="#"
      standalone
      preventDefault
      :text="linkText"
      aria-label="Link"
    />
  </sinch-card-v2>
</template>

<script>
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/assets/illustrations/cat-texting'
import '@nectary/components/button'
import '@nectary/components/link'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/text'

export default {
  methods: {
    handleCardClick() {},
    handleButtonClick() {}
  },
  computed: {
    content() {
      return this.$route.query.content
    },
    title() {
      return this.$route.query.title
    },
    hasIllustration() {
      return this.$route.query.illustration !== undefined
    },
    hasIcon() {
      return this.$route.query.icon !== undefined
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
    disabled() {
      return this.$route.query.disabled !== undefined
    },
    clickable() {
      return this.$route.query.clickable !== undefined
    },
    selected() {
      return this.$route.query.selected !== undefined
    }
  }
}
</script>
