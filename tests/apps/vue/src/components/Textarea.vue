<template>
  <sinch-textarea :placeholder="placeholderText" :invalid="isInvalid" :disabled="isDisabled" :value="value" :rows="rows"
    :minrows="minrows" :resizable="resizable" @--change="onChange" @--focus="onFocus" @--blur="onBlur">
    <template v-if="hasBottom">
      <sinch-button slot="bottom" aria-label="Paperclip">
        <sinch-icon name="fa-paperclip-vertical" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Emoji">
        <sinch-icon name="fa-face-laugh" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Variables">
        <sinch-icon name="fa-magnifying-glass" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon name="fa-comment-plus" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon name="fa-ellipsis" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-tag slot="bottom" text="400" color="success" style="margin-left: auto;"></sinch-tag>
      <sinch-button slot="bottom" type="primary" aria-label="Send" text="Send">
        <sinch-icon name="fa-paper-plane-top" slot="right-icon"></sinch-icon>
      </sinch-button>
    </template>
  </sinch-textarea>
</template>

<script>
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/components/icon'


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
