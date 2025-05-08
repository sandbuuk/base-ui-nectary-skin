<template>
  <sinch-select-menu :rows="rows" :multiple="isMultiple" :name="name" :value="value" @--change="onChange">
    <template v-if="isSectionedExample === false">
      <sinch-select-menu-option v-for="[key, value] in items" :key="key" :value="key" :text="value.text"
        :disabled="value.isDisabled">
        <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" v-if="value.icon === '1'"
          slot="icon"></sinch-icon>
      </sinch-select-menu-option>
    </template>
    <template v-if="isSectionedExample === true" v-for="[key, section] in sectionedOptions">
      <sinch-title type="s" level="4" :text="key" />
      <sinch-select-menu-option v-for="item in section" :value="item.text" :text="item.text"
        :disabled="item.isDisabled">
        <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" v-if="item.icon === '1'"
          slot="icon"></sinch-icon>
      </sinch-select-menu-option>
    </template>
  </sinch-select-menu>
</template>

<script>
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/icon'
import { getSearchKey } from '../utils'
const options = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
  5: { text: 'Option 1 value long long long', icon: '1' },
  6: { text: 'Option 2', icon: '1', isDisabled: true },
  7: { text: 'Option 3', icon: null },
  8: { text: 'Option 4', icon: null },
}

const sectionedOptions = {
  'Section 1': [{ text: 'Option 1 value long long long', icon: '1' }, { text: 'Option 2', icon: '1', isDisabled: true }],
  'Section 2': [{ text: 'Option 3', icon: null }],
  'Section 3': [{ text: 'Option 4', icon: null }, { text: 'Option 5', icon: '1' }],
  'Section 4': [{ text: 'Option 6', icon: '1', isDisabled: true }, { text: 'Option 7', icon: null }],
}

export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'select-menu'
    }
  },
  methods: {
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    },
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: e.detail}))
      this.value = e.detail
    }
  },
  computed: {
    name() {
      return this.getSearchParam('name')
    },
    rows() {
      const val = this.getSearchParam('rows')
      return val != null ? parseInt(val) : null
    },
    isMultiple() {
      return this.getSearchParam('multiple') != null
    },
    items() {
      return this.getSearchParam('example') === 'lots'
        ? Object.entries(options)
        : Object.entries(options).slice(0, 4)
    },
    sectionedOptions() {
      return Object.entries(sectionedOptions)
    },
    isSectionedExample() {
      return this.getSearchParam('section') === 'true'
    }
  },
  data() {
    return {
      value: this.getSearchParam('value') ?? ''
    }
  }
}
</script>
