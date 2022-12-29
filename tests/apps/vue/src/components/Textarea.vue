<template>
  <sinch-textarea
    :placeholder="placeholderText"
    :invalid="isInvalid"
    :disabled="isDisabled"
    :value="value"
    :rows="rows"
    :resizable="resizable"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
    <template v-if="hasBottom">
      <sinch-icon-button slot="bottom" aria-label="Paperclip">
        <sinch-icon-attach-file slot="icon"></sinch-icon-attach-file>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Emoji">
        <sinch-icon-mood slot="icon"></sinch-icon-mood>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Variables">
        <sinch-icon-search slot="icon"></sinch-icon-search>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Comment">
        <sinch-icon-add-comment slot="icon"></sinch-icon-add-comment>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Comment">
        <sinch-icon-more-horiz slot="icon"></sinch-icon-more-horiz>
      </sinch-icon-button>
      <sinch-tag
        slot="bottom"
        text="400"
        color="olive"
        style="margin-left: auto;"
      ></sinch-tag>
      <sinch-button
        slot="bottom"
        type="primary"
        aria-label="Send"
        text="Send"
      >
        <sinch-icon-send slot="right-icon"></sinch-icon-send>
      </sinch-button>
    </template>
  </sinch-textarea>
</template>

<script>
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/attach-file'
import '@sinch-engage/nectary/icons/send'
import '@sinch-engage/nectary/icons/mood'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/add-comment'
import '@sinch-engage/nectary/icons/more-horiz'

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
  props: {
    search: URLSearchParams
  },
  computed: {
    placeholderText() {
      return this.search.get('placeholder')
    },
    isInvalid() {
      return this.search.get('invalid') !== null
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    hasBottom() {
      return this.search.get('bottom') !== null
    },
    rows() {
      return this.search.get('rows')
    },
    resizable() {
      return this.search.get('resizable')
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

