<template>
  <sinch-text id="link-wrapper" type="m">
    <span>Line with </span>
    <sinch-link
      preventdefault
      :href="href"
      :text="text"
      :disabled="isDisabled"
      :external="isExternal"
      :standalone="isStandalone"
      @--click="onClick"
      @--focus="onFocus"
      @--blur="onBlur"
    ></sinch-link>
    <span> navigation</span>
  </sinch-text>
</template>

<script>
import '@nectary/components/link'
import '@nectary/components/text'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onClick(e) {
      window.dispatchEvent(new CustomEvent('sinch-link-click'))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-link-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-link-blur'))
    }
  },
  computed: {
    text() {
      return this.$route.query.text
    },
    href() {
      return this.$route.query.href
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    isExternal() {
      return this.$route.query.external != null
    },
    isStandalone() {
      return this.$route.query.standalone != null
    },
  },
}
</script>

