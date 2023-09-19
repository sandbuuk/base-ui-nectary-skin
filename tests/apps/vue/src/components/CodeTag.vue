<template>
  <div id="code-tag-wrapper" style="max-width: 100%;">
    <sinch-text type="m" :ellipsis="isEllipsis">
      <span>Lorem ipsum </span>
      <sinch-code-tag :text="text"></sinch-code-tag>
      <span> lorem ipsum</span>
    </sinch-text>
  </div>
</template>

<script>
import '@nectary/components/code-tag'
import '@nectary/components/text'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.$route.query.text
    },
    isEllipsis() {
      return this.$route.query.ellipsis != null
    }
  },
}
</script>

