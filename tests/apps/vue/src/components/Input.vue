<template>
  <sinch-input :name="name" :type="type" :size="size" :placeholder="placeholderText" :mask="mask" :disabled="isDisabled"
    :invalid="isInvalid" :value="value" @--copy="onCopy" @--cut="onCut" @--paste="onPaste" @--change="onChange"
    @--focus="onFocus" @--blur="onBlur">
    <sinch-icon icons-version="2" name="fa-magnifying-glass" v-if="hasIcon" slot="icon"></sinch-icon>
    <sinch-select-button v-if="hasLeft" slot="left" text="+0" placeholder="" aria-label="">
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
import '@nectary/components/icon'
import { getSearchKey } from '../utils'
export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'input'
    }
  },
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
    },
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    }
  },
  computed: {
    name() {
      return this.getSearchParam('name')
    },
    placeholderText() {
      return this.getSearchParam('placeholder')
    },
    mask() {
      return this.getSearchParam('mask')
    },
    isInvalid() {
      return this.getSearchParam('invalid') != null
    },
    isDisabled() {
      return this.getSearchParam('disabled') != null
    },
    type() {
      return this.getSearchParam('type')
    },
    size() {
      return this.getSearchParam('size')
    },
    hasLeft() {
      return this.getSearchParam('left') != null
    },
    hasRight() {
      return this.getSearchParam('right') != null
    },
    hasIcon() {
      return this.getSearchParam('icon') != null
    },
    hasCopy() {
      return this.getSearchParam('copy') != null
    },
    hasCut() {
      return this.getSearchParam('cut') != null
    },
    hasPaste() {
      return this.getSearchParam('paste') != null
    },
  },
  data() {
    return {
      value: this.getSearchParam('value') ?? '',
    }
  }
}
</script>
