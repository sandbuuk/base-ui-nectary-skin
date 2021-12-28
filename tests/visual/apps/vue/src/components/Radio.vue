<template>
  <sinch-radio :value="value" @change="onChange">
    <sinch-radio-option value="1" text="Option 1 value"></sinch-radio-option>
    <sinch-radio-option value="2" text="Option 2 value" disabled></sinch-radio-option>
    <sinch-radio-option value="3" text="Option 3 value"></sinch-radio-option>
    <sinch-radio-option value="4" text="Option 4 value"></sinch-radio-option>
  </sinch-radio>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      this.value = e.detail
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

