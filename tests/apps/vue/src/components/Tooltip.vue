<template>
  <sinch-tooltip
    :orientation="orientation"
    :text="text"
    :type="type"
    @--show="onTooltipShow"
    @--hide="onTooltipHide"
  >
    <sinch-text id="example-content" type="m">Some content</sinch-text>
  </sinch-tooltip>
</template>

<script>
import '@nectary/components/tooltip'
import '@nectary/components/text'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onTooltipShow() {
      window.dispatchEvent(new CustomEvent('sinch-tooltip-show'))
    },
    onTooltipHide() {
      window.dispatchEvent(new CustomEvent('sinch-tooltip-hide'))
    }
  },
  computed: {
    text() {
      return this.$route.query.text
    },
    type() {
      return this.$route.query.type
    },
    orientation() {
      return this.$route.query.orientation
    },
  }
}
</script>

