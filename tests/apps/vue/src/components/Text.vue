<template>
  <sinch-text type="m">
    <span>prefix </span>
    <sinch-text
      :type="type"
      :inline="isInline"
      :emphasized="isEmphasized"
    >
      {{text}}
      <sinch-link href="#" text="Link"></sinch-link>
      {{' '}}
      <sinch-code-tag text="Code"></sinch-code-tag>
    </sinch-text>
    <span> postfix</span>
  </sinch-text>
</template>

<script>
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/code-tag'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text')
    },
    type() {
      return this.search.get('type')
    },
    isInline() {
      return this.search.get('inline') !== null
    },
    isEmphasized() {
      return this.search.get('emphasized') !== null
    },
  },
}
</script>
