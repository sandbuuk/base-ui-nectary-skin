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
      return this.search.get('text')
    },
    href() {
      return this.search.get('href')
    },
    isDisabled() {
      return this.search.get('disabled') != null
    },
    isExternal() {
      return this.search.get('external') != null
    },
    isStandalone() {
      return this.search.get('standalone') != null
    },
  },
}
</script>

