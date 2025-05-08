<template>
  <sinch-radio :name="name" :value="value" :invalid="isInvalid" @--change="onChange">
    <sinch-radio-option v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :text="opt.text"
      :disabled="opt.disabled">
    </sinch-radio-option>
  </sinch-radio>
</template>

<script>
import '@nectary/components/radio'
import '@nectary/components/radio-option'
import { getSearchKey } from '../utils'
const options = [{
  value: '1',
  text: 'Option value 1',
}, {
  value: '2',
  text: 'Option value 2',
  disabled: true,
}, {
  value: '3',
  text: 'Option value 3',
}, {
  value: '4',
  text: 'Option value 4',
}]
const singleOption = [{
  value: '1',
  text: 'Option value 1',
}]

export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'radio'
    }
  },
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-radio-change', {detail: e.detail}))
      }
    },
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    }
  },
  computed: {
    name() {
      return this.getSearchParam('name')
    },
    isControlled() {
      return this.getSearchParam('uncontrolled') == null
    },
    isInvalid() {
      return this.getSearchParam('invalid') != null
    },
    options() {
      const example = this.getSearchParam('example')

      return example === 'single'
        ? singleOption
        : options
    }
  },
  data() {
    return {
      value: this.getSearchParam('value') ?? ''
    }
  }
}
</script>

