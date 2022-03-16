<template>
  <sinch-textarea
    v-bind:placeholder="placeholderText"
    v-bind:label="labelText"
    v-bind:optionaltext="optionalText"
    v-bind:additionaltext="additionalText"
    v-bind:invalidtext="invalidText"
    v-bind:disabled="isDisabled"
    :value="value"
    @change="onChange"
    @focusin="onFocus"
    @focusout="onBlur">
    <sinch-help-tooltip v-if="tooltipText != null" v-bind:text="tooltipText" slot="tooltip"></sinch-help-tooltip>
  </sinch-textarea>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-textarea-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-textarea-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-textarea-blur'))
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

