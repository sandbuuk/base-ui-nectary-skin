<template>
  <sinch-file-status
    :type="type"
    :filename="filename"
  >
    <sinch-text v-if="hasDescription" slot="content" type="m">The file is too large, try a file size less than 20 MB</sinch-text>
    <sinch-progress v-if="hasProgress" slot="content" value="73" detailed></sinch-progress>
    <sinch-icon-button slot="action" size="s">
      <sinch-icon-close slot="icon"></sinch-icon-close>
    </sinch-icon-button>
  </sinch-file-status>
</template>

<script>
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/progress'
import '@sinch-engage/nectary-assets/icons/close'

export default {
  methods: {
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    type() {
      return this.search.get('type')
    },
    filename() {
      return this.search.get('filename')
    },
    hasDescription() {
      return this.search.get('description') !== null
    },
    hasProgress() {
      return this.search.get('progress') !== null
    },
  }
}
</script>

