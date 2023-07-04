<template>
  <sinch-progress-stepper
    v-if="example != 'single'"
    :value="value"
    :progressvalue="progressValue"
    @--change="onChange"
    aria-label="Stepper">
    <sinch-progress-stepper-item value="1" :invalid="invalidValue === '1'" text="Shipping address" aria-label="1"/>
    <sinch-progress-stepper-item value="2" :invalid="invalidValue === '2'" text="Payment method" aria-label="2"/>
    <sinch-progress-stepper-item value="3" :invalid="invalidValue === '3'" text="Item and shipping" aria-label="3"/>
    <sinch-progress-stepper-item value="4" :invalid="invalidValue === '4'" text="Final" aria-label="4"/>
  </sinch-progress-stepper>
  <sinch-progress-stepper
    v-if="example == 'single'"
    :value="value"
    aria-label="Stepper">
    <sinch-progress-stepper-item
      aria-label="1"
      text="Shipping address"
      value="1"
      :invalid="invalidValue === '1'">
    </sinch-progress-stepper-item>
  </sinch-progress-stepper>
</template>

<script>
import '@sinch-engage/nectary/progress-stepper'
import '@sinch-engage/nectary/progress-stepper-item'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      this.value = e.detail
      window.dispatchEvent(new CustomEvent('sinch-progress-stepper-change', {detail: this.value}))
    }
  },
  computed: {
    invalidValue() {
      return this.search.get('invalid') ?? ''
    },
    progressValue() {
      return this.search.get('progress') ?? ''
    },
    example() {
      return this.search.get('example')
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

