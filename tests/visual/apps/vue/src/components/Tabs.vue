<template>
  <sinch-tabs :value="value" @change="onChange">
    <sinch-tabs-option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :text="opt.text"
      :disabled="opt.disabled">
      <sinch-icon-share v-if="opt.icon != null"></sinch-icon-share>
    </sinch-tabs-option>
  </sinch-tabs>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
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
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
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

