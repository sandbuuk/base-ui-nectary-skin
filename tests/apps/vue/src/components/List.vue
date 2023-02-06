<template>
  <sinch-list>
    <sinch-list-item v-for="i in 4">
      <div
        slot="content"
        style="display: flex;align-items: center;gap: 12px;">
        <sinch-icon-branded-chatbot></sinch-icon-branded-chatbot>
        <sinch-text style="flex: 1;" type="m" inline>Replace me</sinch-text>
        <sinch-icon-button aria-label="Add" size="s">
          <sinch-icon-add slot="icon"></sinch-icon-add>
        </sinch-icon-button>
      </div>
    </sinch-list-item>
  </sinch-list>
</template>

<script>
import '@sinch-engage/nectary/list'
import '@sinch-engage/nectary/list-item'
import '@sinch-engage/nectary-assets/icons/add'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/text'

export default {
  props: {
    search: URLSearchParams
  },
}
</script>

