<template>
  <sinch-checkbox
    v-bind:text="text"
    v-bind:disabled="isDisabled"
    v-bind:indeterminate="isIndeterminate"
    v-bind:checked="checked"
    @change="onChange">
  </sinch-checkbox>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      console.log('AAAA')
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
    isIndeterminate() {
      return this.search.get('indeterminate') !== null
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

