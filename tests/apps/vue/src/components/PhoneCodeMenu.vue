<template>
  <sinch-select-menu
    aria-label="Menu"
    :rows="rows"
    :value="value"
    @--change="onChange"
  >
    <sinch-select-menu-option
      v-for="[code, country] in countries"
      :key="code"
      :text="`(${country.phoneCode}) ${country.name}`"
      :value="code"
    >
      <sinch-flag slot="icon" :code="code"></sinch-flag>
    </sinch-select-menu-option>
  </sinch-select-menu>
</template>

<script>
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/flag'
import countriesJson from '@sinch-engage/nectary/utils/countries.json'

const countries = Object.entries(countriesJson)

export default {
  methods: {
    onChange(e) {
      window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: e.detail}))
      this.value = e.detail
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    rows() {
      const val = this.search.get('rows')
      return val !== null ? parseInt(val) : null
    },
    countries() {
      return countries
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>
