<template>
  <sinch-toggle
    v-bind:text="text"
    v-bind:disabled="isDisabled"
    v-bind:small="isSmall"
    v-bind:labeled="isLabeled"
    v-bind:checked="checked"
    @change="onChange">
  </sinch-toggle>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.checked = e.detail
      }
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      return this.search.get('text')
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    isSmall() {
      return this.search.get('small') !== null
    },
    isLabeled() {
      return this.search.get('labeled') !== null
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
  },
  data() {
    return {
      checked: this.search.get('checked') !== null
    }
  }
}
</script>

