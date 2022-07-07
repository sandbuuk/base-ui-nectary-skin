<template>
  <div id="wrapper">
    <span>prefix</span>
    <sinch-text
      :text="text"
      :type="type"
      :inline="isInline"
      :emphasized="isEmphasized"
    ></sinch-text>
    <span>postfix</span>
  </div>
</template>

<script>
import '@sinch-engage/nectary/text'

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
