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
    @change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-help-tooltip v-if="tooltipText != null" v-bind:text="tooltipText" slot="tooltip"></sinch-help-tooltip>
    <sinch-select-option value="1" text="Option 1 value" slot="option">
      <sinch-icon-open-in-new slot="icon" size="20"/>
    </sinch-select-option>
    <sinch-select-option value="2" text="Option 2 value" slot="option" disabled>
      <sinch-icon-open-in-new slot="icon" size="20"/>
    </sinch-select-option>
    <sinch-select-option value="3" text="Option 3 value" slot="option"/>
    <sinch-select-option value="4" text="Option 4 value" slot="option"/>
  </sinch-select>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-select-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-select-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-select-blur'))
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

