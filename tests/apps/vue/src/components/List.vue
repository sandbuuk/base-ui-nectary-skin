<template>
  <sinch-list>
    <sinch-list-item v-for="i in 4">
      <div slot="content" style="display: flex;align-items: center;gap: 12px;">
        <sinch-icon-branded-chatbot></sinch-icon-branded-chatbot>
        <sinch-text style="flex: 1;" type="m" inline>Replace me</sinch-text>
        <sinch-button aria-label="Add" size="s">
          <sinch-icon name="fa-plus" slot="icon"></sinch-icon>
        </sinch-button>
      </div>
    </sinch-list-item>
  </sinch-list>
</template>

<script>
import '@nectary/components/list'
import '@nectary/components/list-item'
import '@nectary/components/icon'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/components/text'

export default {
  }
</script>
