<template>
  <sinch-tile-control :small="isSmall" :multiple="isMultiple" :cols="numCols" :value="value" @--change="onChange">
    <sinch-tile-control-option
      value="0"
      text="Message"
      aria-label="Message"
      @--focus="onFocus"
      @--blur="onBlur">
      <sinch-icon-fa-message slot="icon"></sinch-icon-fa-message>
    </sinch-tile-control-option>
    <template v-if="!isSingleOption">
      <sinch-tile-control-option
        value="1"
        text="Title"
        aria-label="Title"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-fa-t  slot="icon"></sinch-icon-fa-t>
      </sinch-tile-control-option>
      <sinch-tile-control-option
        value="2"
        text="Text"
        aria-label="Text"
        disabled
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-fa-align-left slot="icon"></sinch-icon-fa-align-left>
      </sinch-tile-control-option>
      <sinch-tile-control-option
        value="3"
        text="QR Code"
        aria-label="qr code"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-fa-qrcode slot="icon"></sinch-icon-fa-qrcode>
      </sinch-tile-control-option>
      <sinch-tile-control-option
        value="4"
        text="Terms"
        aria-label="terms"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-fa-square-check slot="icon"></sinch-icon-fa-square-check>
      </sinch-tile-control-option>
      <sinch-tile-control-option
        value="5"
        text="Button"
        aria-label="button"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-ai slot="icon"></sinch-icon-ai>
      </sinch-tile-control-option>
      <sinch-tile-control-option
        value="6"
        text="Mobile App"
        aria-label="mobile app"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-fa-house-heart slot="icon"></sinch-icon-fa-house-heart>
      </sinch-tile-control-option>
      <sinch-tile-control-option
        value="7"
        text="Click to call"
        aria-label="click to call"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-camera slot="icon"></sinch-icon-camera>
      </sinch-tile-control-option>
      <sinch-tile-control-option
        value="8"
        text="Separator"
        aria-label="separator"
        @--focus="onFocus"
        @--blur="onBlur">
        <sinch-icon-branded-contact slot="icon"></sinch-icon-branded-contact>
      </sinch-tile-control-option>
    </template>
  </sinch-tile-control>
</template>

<script>
import "@nectary/components/tile-control";
import "@nectary/components/tile-control-option";
import "@nectary/assets/icons/fa-align-left";
import "@nectary/assets/icons/camera";
import "@nectary/assets/icons/fa-message";
import "@nectary/assets/icons/fa-t";
import "@nectary/assets/icons/fa-qrcode";
import "@nectary/assets/icons/fa-square-check";
import "@nectary/assets/icons/ai";
import "@nectary/assets/icons/fa-house-heart";
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

