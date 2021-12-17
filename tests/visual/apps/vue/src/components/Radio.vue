<template>
  <sinch-radio :style="style" :value="value" @change="onChange">
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
  props: {
    width: Number
  },
  computed: {
    style () {
      return {
        width: this.width != null ? `${this.width}px` : 'unset'
      };
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

