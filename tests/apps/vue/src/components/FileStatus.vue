<template>
  <sinch-file-status :type="type" :filename="filename">
    <sinch-text v-if="hasDescription" slot="content" type="m">The file is too large, try a file size less than 20
      MB</sinch-text>
    <sinch-progress v-if="hasProgress" slot="content" value="73" detailed></sinch-progress>
    <sinch-button slot="action" size="s">
      <sinch-icon name="fa-xmark" slot="icon"></sinch-icon>
    </sinch-button>
  </sinch-file-status>
</template>

<script>
import '@nectary/components/file-status'
import '@nectary/components/text'
import '@nectary/components/progress'
import '@nectary/components/icon'

export default {
  methods: {
  },
  computed: {
    type() {
      return this.$route.query.type
    },
    filename() {
      return this.$route.query.filename
    },
    hasDescription() {
      return this.$route.query.description != null
    },
    hasProgress() {
      return this.$route.query.progress != null
    },
  }
}
</script>
