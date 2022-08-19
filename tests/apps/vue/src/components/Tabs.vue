<template>
  <sinch-tabs :value="value" @--change="onChange">
    <sinch-tabs-option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :text="opt.text"
      :disabled="opt.disabled">
      <sinch-icon-open-in-new v-if="opt.icon != null" slot="icon"></sinch-icon-open-in-new>
    </sinch-tabs-option>
  </sinch-tabs>
</template>

<script>
import '@sinch-engage/nectary/tabs'
import '@sinch-engage/nectary/tabs-option'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-tabs-change', {detail: e.detail}))
      }
    }
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

