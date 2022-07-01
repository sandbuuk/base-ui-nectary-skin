<template>
  <sinch-accordion :value="value" @change="onChange" :multiple="isMultiple">
    <sinch-accordion-item v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :label="opt.label"
      :disabled="opt.disabled"
      :status="opt.status"
      :optionaltext="opt.optional">
      <span v-if="opt.content != null" slot="content">{{opt.content}}</span>
      <sinch-icon-open-in-new v-if="opt.icon === true" slot="icon"></sinch-icon-open-in-new>
    </sinch-accordion-item>
  </sinch-accordion>
</template>

<script>
import '@sinch-engage/nectary/accordion'
import '@sinch-engage/nectary/accordion-item'
import '@sinch-engage/nectary/icons/open-in-new'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-accordion-change', {detail: e.detail}))
      }
    }
  },
  computed: {
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    isMultiple() {
      return this.search.get('multiple') !== null
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

