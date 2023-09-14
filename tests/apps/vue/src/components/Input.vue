<template>
  <sinch-input
    :type="type"
    :size="size"
    :placeholder="placeholderText"
    :mask="mask"
    :disabled="isDisabled"
    :invalid="isInvalid"
    :value="value"
    @--copy="onCopy"
    @--cut="onCut"
    @--paste="onPaste"
    @--change="onChange"
    @--focus="onFocus"
    @--blur="onBlur">
    <sinch-icon-search v-if="hasIcon" slot="icon"></sinch-icon-search>
    <sinch-select-button
      v-if="hasLeft"
      slot="left"
      text="+0"
      placeholder=""
      aria-label=""
    >
    </sinch-select-button>
    <sinch-tag v-if="hasRight" slot="right" text="tag"></sinch-tag>
    <sinch-chip v-if="hasRight" slot="right" text="chip" aria-label=""></sinch-chip>
  </sinch-input>
</template>

<script>
import '@nectary/components/input'
import '@nectary/components/select-button'
import '@nectary/components/tag'
import '@nectary/components/chip'
import '@nectary/assets/icons/search'

export default {
  methods: {
    onChange(e) {
      this.value = e.detail
      window.dispatchEvent(new CustomEvent('sinch-input-change', {detail: e.detail}))
    },
    onCopy(e) {
      if (!this.hasCopy) return

      const { value, replaceWith } = e.detail

      replaceWith('REPLACED')

      window.dispatchEvent(new CustomEvent('sinch-input-copy', { detail: value }))
    },
    onCut(e) {
      if (!this.hasCut) return

      const { value, replaceWith } = e.detail

      replaceWith('REPLACED')

      window.dispatchEvent(new CustomEvent('sinch-input-cut', { detail: value }))
    },
    onPaste(e) {
      if (!this.hasPaste) return

      const { value, replaceWith } = e.detail

      replaceWith('REPLACED')

      window.dispatchEvent(new CustomEvent('sinch-input-paste', { detail: value }))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-input-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-input-blur'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    placeholderText() {
      return this.search.get('placeholder')
    },
    mask() {
      return this.search.get('mask')
    },
    isInvalid() {
      return this.search.get('invalid') !== null
    },
    isDisabled() {
      return this.search.get('disabled') !== null
    },
    type() {
      return this.search.get('type')
    },
    size() {
      return this.search.get('size')
    },
    hasLeft() {
      return this.search.get('left') !== null
    },
    hasRight() {
      return this.search.get('right') !== null
    },
    hasIcon() {
      return this.search.get('icon') !== null
    },
    hasCopy() {
      return this.search.get('copy') !== null
    },
    hasCut() {
      return this.search.get('cut') !== null
    },
    hasPaste() {
      return this.search.get('paste') !== null
    },
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>
