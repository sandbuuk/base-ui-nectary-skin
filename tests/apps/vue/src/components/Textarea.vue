<template>
  <sinch-textarea :placeholder="placeholderText" :invalid="isInvalid" :disabled="isDisabled" :value="value" :rows="rows"
    :minrows="minrows" :resizable="resizable" @--change="onChange" @--focus="onFocus" @--blur="onBlur">
    <template v-if="hasBottom">
      <sinch-button slot="bottom" aria-label="Paperclip">
        <sinch-icon-attach-file slot="icon"></sinch-icon-attach-file>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Emoji">
        <sinch-icon-mood slot="icon"></sinch-icon-mood>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Variables">
        <sinch-icon-search slot="icon"></sinch-icon-search>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon-add-comment slot="icon"></sinch-icon-add-comment>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon-more-horiz slot="icon"></sinch-icon-more-horiz>
      </sinch-button>
      <sinch-tag slot="bottom" text="400" color="success" style="margin-left: auto;"></sinch-tag>
      <sinch-button slot="bottom" type="primary" aria-label="Send" text="Send">
        <sinch-icon-send slot="right-icon"></sinch-icon-send>
      </sinch-button>
    </template>
  </sinch-textarea>
</template>

<script>
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/assets/icons/attach-file'
import '@nectary/assets/icons/send'
import '@nectary/assets/icons/mood'
import '@nectary/assets/icons/search'
import '@nectary/assets/icons/add-comment'
import '@nectary/assets/icons/more-horiz'

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
