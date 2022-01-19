<template>
  <sinch-accordion :value="value" @change="onChange" :multiple="isMultiple">
    <sinch-accordion-item v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :label="opt.label"
      :disabled="opt.disabled"
      :status="opt.status">
      <span v-if="opt.content != null">{{opt.content}}</span>
      <sinch-icon-share v-if="opt.icon === true" slot="icon"></sinch-icon-share>
    </sinch-accordion-item>
  </sinch-accordion>
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

