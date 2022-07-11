<template>
  <sinch-card-container style="flex: 1;">
    <div style="display: flex;flex-direction: column;background-color: #F1F3F4;align-items: center;justify-content: center;min-height: 150px;height: 100%;">
      <span style="font-size: 24px">Replace me!</span>
      <span style="font-size: 16px">Im a template component</span>
    </div>
  </sinch-card-container>
</template>

<script>
import '@sinch-engage/nectary/card-container'

export default {
  props: {
    search: URLSearchParams
  },
}
</script>
