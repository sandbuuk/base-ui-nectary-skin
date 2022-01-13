<template>
  <sinch-alert
    v-bind:type="type"
    v-bind:text="text"
    v-bind:title="title"
    v-bind:actiontext="actionText"
    v-bind:dismissable="isDismissable"
    v-bind:multiline="isMultiline"
></sinch-alert>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text') ?? undefined
    },
    title() {
      return this.search.get('title') ?? undefined
    },
    type() {
      return this.search.get('type') ?? undefined
    },
    actionText() {
      return this.search.get('action') ?? undefined
    },
    isDismissable() {
      return this.search.get('dismissable') != null
    },
    isMultiline() {
      return this.search.get('multiline') != null
    },
  },
}
</script>

