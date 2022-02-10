<template>
  <sinch-radio :value="value" @change="onChange">
    <sinch-radio-option v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :text="opt.text"
      :disabled="opt.disabled">
    </sinch-radio-option>
  </sinch-radio>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-radio-change', {detail: e.detail}))
      }
    },
  },
  computed: {
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    options() {
      const data = this.search.get('options')

      if (data === null) {
        return []
      }

      try {
        return JSON.parse(decodeURI(data))
      } catch {
        return []
      }
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

