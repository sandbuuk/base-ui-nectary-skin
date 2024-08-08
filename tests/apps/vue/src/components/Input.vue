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
    <sinch-icon-fa-magnifying-glass v-if="hasIcon" slot="icon"></sinch-icon-fa-magnifying-glass>
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
import '@nectary/assets/icons/fa-magnifying-glass'

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
  computed: {
    placeholderText() {
      return this.$route.query.placeholder
    },
    mask() {
      return this.$route.query.mask
    },
    isInvalid() {
      return this.$route.query.invalid != null
    },
    isDisabled() {
      return this.$route.query.disabled != null
    },
    type() {
      return this.$route.query.type
    },
    size() {
      return this.$route.query.size
    },
    hasLeft() {
      return this.$route.query.left != null
    },
    hasRight() {
      return this.$route.query.right != null
    },
    hasIcon() {
      return this.$route.query.icon != null
    },
    hasCopy() {
      return this.$route.query.copy != null
    },
    hasCut() {
      return this.$route.query.cut != null
    },
    hasPaste() {
      return this.$route.query.paste != null
    },
  },
  data() {
    return {
      value: this.$route.query.value ?? ''
    }
  }
}
</script>
