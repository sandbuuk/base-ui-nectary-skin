<template>
  <sinch-tooltip
    :orientation="orientation"
    :text="text"
    @--show="onTooltipShow"
    @--hide="onTooltipHide"
  >
    <sinch-text id="content" type="m">Some content</sinch-text>
  </sinch-tooltip>
</template>

<script>
import '@sinch-engage/nectary/tooltip'
import '@sinch-engage/nectary/text'

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
      return this.search.get('text')
    },
    orientation() {
      return this.search.get('orientation')
    },
  }
}
</script>

