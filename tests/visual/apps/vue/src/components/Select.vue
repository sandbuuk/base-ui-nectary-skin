<template>
  <sinch-select
    v-bind:placeholder="placeholderText"
    v-bind:label="labelText"
    v-bind:optionaltext="optionalText"
    v-bind:additionaltext="additionalText"
    v-bind:invalidtext="invalidText"
    v-bind:disabled="isDisabled"
    v-bind:maxvisibleitems="maxVisibleItems"
    :value="value"
    @change="onChange">
    <sinch-input-tooltip v-if="tooltipText != null" v-bind:text="tooltipText" slot="tooltip"></sinch-input-tooltip>
    <sinch-select-option value="1" text="Option 1 value" slot="select">
      <sinch-icon-share/>
    </sinch-select-option>
    <sinch-select-option value="2" text="Option 2 value" slot="select" disabled>
      <sinch-icon-share/>
    </sinch-select-option>
    <sinch-select-option value="3" text="Option 3 value" slot="select"/>
    <sinch-select-option value="4" text="Option 4 value" slot="select"/>
  </sinch-select>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
      }
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    placeholderText() {
      return this.search.get('placeholder')
    },
    tooltipText() {
      return this.search.get('tooltip')
    },
    labelText() {
      return this.search.get('label')
    },
    optionalText() {
      return this.search.get('optional')
    },
    additionalText() {
      return this.search.get('additional')
    },
    invalidText() {
      return this.search.get('invalid')
    },
    maxVisibleItems() {
      const val = this.search.get('maxvisibleitems')
      return val !== null ? parseInt(val) : null
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

