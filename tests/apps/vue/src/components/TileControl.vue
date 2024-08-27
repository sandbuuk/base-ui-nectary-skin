<template>
  <sinch-tile-control :small="isSmall" :multiple="isMultiple" :cols="numCols" :value="value" @--change="onChange">
    <sinch-tile-control-option value="0" text="Message" aria-label="Message" @--focus="onFocus" @--blur="onBlur">
      <sinch-icon name="fa-message" slot="icon"></sinch-icon>
    </sinch-tile-control-option>
    <template v-if="!isSingleOption">
      <sinch-tile-control-option value="1" text="Title" aria-label="Title" @--focus="onFocus" @--blur="onBlur">
        <sinch-icon name="fa-t" slot="icon"></sinch-icon>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="2" text="Text" aria-label="Text" disabled @--focus="onFocus" @--blur="onBlur">
        <sinch-icon name="fa-align-left" slot="icon"></sinch-icon>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="3" text="QR Code" aria-label="qr code" @--focus="onFocus" @--blur="onBlur">
        <sinch-icon name="fa-qrcode" slot="icon"></sinch-icon>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="4" text="Terms" aria-label="terms" @--focus="onFocus" @--blur="onBlur">
        <sinch-icon name="fa-square-check" slot="icon"></sinch-icon>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="5" text="Button" aria-label="button" @--focus="onFocus" @--blur="onBlur">
        <sinch-icon name="ai" slot="icon"></sinch-icon>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="6" text="Mobile App" aria-label="mobile app" @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon name="fa-house-heart" slot="icon"></sinch-icon>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="7" text="Click to call" aria-label="click to call" @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon name="camera" slot="icon"></sinch-icon>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="8" text="Separator" aria-label="separator" @--focus="onFocus" @--blur="onBlur">
        <sinch-icon-branded-contact slot="icon"></sinch-icon-branded-contact>
      </sinch-tile-control-option>
    </template>
  </sinch-tile-control>
</template>

<script>
import "@nectary/components/tile-control";
import "@nectary/components/tile-control-option";
import "@nectary/components/icon";
import "@nectary/assets/icons-branded/contact";

export default {
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-tile-control-change', {detail: e.detail}))
      }
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-tile-control-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-tile-control-blur'))
    }
  },
  computed: {
    isControlled() {
      return this.$route.query.uncontrolled == null
    },
    isSingleOption() {
      return this.$route.query.single != null
    },
    isSmall() {
      return this.$route.query.small != null
    },
    isMultiple() {
      return this.$route.query.multiple != null
    },
    numCols() {
      const val = this.$route.query.cols
      return val != null ? parseInt(val) : 1
    }
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>
