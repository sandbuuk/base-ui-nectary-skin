<template>
  <sinch-textarea :name="name" :placeholder="placeholderText" :invalid="isInvalid" :disabled="isDisabled" :value="value" :rows="rows"
    :minrows="minrows" :resizable="resizable" @--change="onChange" @--focus="onFocus" @--blur="onBlur">
    <template v-if="hasBottom">
      <sinch-button slot="bottom" aria-label="Paperclip">
        <sinch-icon icons-version="2" name="fa-paperclip-vertical" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Emoji">
        <sinch-icon icons-version="2" name="fa-face-laugh" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Variables">
        <sinch-icon icons-version="2" name="fa-magnifying-glass" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon icons-version="2" name="fa-comment-plus" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon icons-version="2" name="fa-ellipsis" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-tag slot="bottom" text="400" color="success" style="margin-left: auto;"></sinch-tag>
      <sinch-button slot="bottom" type="primary" aria-label="Send" text="Send">
        <sinch-icon icons-version="2" name="fa-paper-plane-top" slot="right-icon"></sinch-icon>
      </sinch-button>
    </template>
  </sinch-textarea>
</template>

<script>
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/components/icon'
import { getSearchKey } from '../utils'

export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'textarea'
    }
  },
  methods: {
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    },
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
    name() {
      return this.getSearchParam('name')
    },
    placeholderText() {
      return this.getSearchParam('placeholder')
    },
    isInvalid() {
      return this.getSearchParam('invalid') != null
    },
    isDisabled() {
      return this.getSearchParam('disabled') != null
    },
    hasBottom() {
      return this.getSearchParam('bottom') != null
    },
    rows() {
      return this.getSearchParam('rows')
    },
    minrows() {
      return this.getSearchParam('minrows')
    },
    resizable() {
      return this.getSearchParam('resizable')
    }
  },
  data() {
    return {
      value: this.getSearchParam('value') ?? ''
    }
  }
}
</script>
