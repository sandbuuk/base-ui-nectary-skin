<template>
  <sinch-tooltip
    :orientation="orientation"
    :text="text"
    :type="type"
    :inverted="isInverted"
    @--show="onTooltipShow"
    @--hide="onTooltipHide"
  >
    <span id="content">Some content</span>
  </sinch-tooltip>
</template>

<script>
import '@sinch-engage/nectary/tooltip'

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
    type() {
      return this.search.get('type')
    },
    orientation() {
      return this.search.get('orientation')
    },
    isInverted() {
      return this.search.get('disabled') !== null
    },
  }
}
</script>

