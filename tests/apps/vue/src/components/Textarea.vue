<template>
  <sinch-textarea :placeholder="placeholderText" :invalid="isInvalid" :disabled="isDisabled" :value="value" :rows="rows"
    :minrows="minrows" :resizable="resizable" @--change="onChange" @--focus="onFocus" @--blur="onBlur">
    <template v-if="hasBottom">
      <sinch-button slot="bottom" aria-label="Paperclip">
        <sinch-icon-fa-paperclip-vertical slot="icon"></sinch-icon-fa-paperclip-vertical>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Emoji">
        <sinch-icon-fa-face-laugh slot="icon"></sinch-icon-fa-face-laugh>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Variables">
        <sinch-icon-fa-magnifying-glass slot="icon"></sinch-icon-fa-magnifying-glass>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon-fa-comment-plus slot="icon"></sinch-icon-fa-comment-plus>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon-fa-ellipsis slot="icon"></sinch-icon-fa-ellipsis>
      </sinch-button>
      <sinch-tag slot="bottom" text="400" color="success" style="margin-left: auto;"></sinch-tag>
      <sinch-button slot="bottom" type="primary" aria-label="Send" text="Send">
        <sinch-icon-fa-paper-plane-top slot="right-icon"></sinch-icon-fa-paper-plane-top>
      </sinch-button>
    </template>
  </sinch-textarea>
</template>

<script>
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/assets/icons/fa-ellipsis'
import '@nectary/assets/icons/fa-paperclip-vertical'
import '@nectary/assets/icons/fa-face-laugh'
import '@nectary/assets/icons/fa-comment-plus'
import '@nectary/assets/icons/fa-paper-plane-top'
import '@nectary/assets/icons/fa-magnifying-glass'


export default {
  methods: {
    onChange(e) {
      this.value = e.detail
      window.dispatchEvent(new CustomEvent('sinch-textarea-change', {detail: e.detail}))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-textarea-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-textarea-blur'))
    }
  },
  computed: {
    placeholderText() {
      return this.$route.query.placeholder
    },
    isInvalid() {
      return this.$route.query.invalid != null
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    hasBottom() {
      return this.$route.query.bottom != null
    },
    rows() {
      return this.$route.query.rows
    },
    minrows() {
      return this.$route.query.minrows
    },
    resizable() {
      return this.$route.query.resizable
    }
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>
