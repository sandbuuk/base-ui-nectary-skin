<template>
  <div id="link-wrapper">
    <span>Line with</span>
    <sinch-link
      :href="href"
      :text="text"
      :disabled="isDisabled"
      :external="isExternal"
      @click="onClick"
      @focusin="onFocus"
      @focusout="onBlur"
    ></sinch-link>
    <span>navigation</span>
  </div>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onClick(e) {
      e.preventDefault()
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
  },
}
</script>

