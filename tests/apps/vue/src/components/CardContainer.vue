<template>
  <sinch-card-container style="flex: 1;">
    <div style="display: flex;flex-direction: column;background-color: #F1F3F4;align-items: center;justify-content: center;min-height: 150px;height: 100%;">
      <sinch-title type="l" level="2" text="Replace me!"></sinch-title>
      <sinch-text type="m">Im a template component</sinch-text>
    </div>
  </sinch-card-container>
</template>

<script>
import '@sinch-engage/nectary/title'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/card-container'

export default {
  props: {
    search: URLSearchParams
  },
}
</script>
