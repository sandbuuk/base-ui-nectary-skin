<template>
  <sinch-button :form-type="formType" :type="type" :text="text" :disabled="isDisabled" :toggled="isToggled" :size="size" @--click="onClick"
    @--focus="onFocus" @--blur="onBlur">
    <sinch-spinner v-if="hasSpinner" static :type="isSmall ? 'small' : 'medium'" slot="icon"></sinch-spinner>
    <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" v-if="hasIcon" slot="icon"></sinch-icon>
    <sinch-icon icons-version="2" name="fa-angle-down" v-if="hasRightIcon" slot="right-icon"></sinch-icon>
  </sinch-button>
</template>

<script>
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/spinner'
import { getSearchKey } from '../utils'
export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    onClick() {
      window.dispatchEvent(new CustomEvent('sinch-button-click'))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-button-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-button-blur'))
    },
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    }
  },
  computed: {
    formType() {
      return this.getSearchParam('form-type')
    },
    type() {
      return this.getSearchParam('type')
    },
    text() {
      return this.getSearchParam('text')
    },
    isDisabled() {
      return this.getSearchParam('disabled') != null
    },
    isToggled() {
      return this.getSearchParam('toggled') != null
    },
    size() {
      return this.getSearchParam('size') != null
    },
    hasRightIcon() {
      return this.getSearchParam('icon-right') != null
    },
    hasIcon() {
      return this.getSearchParam('icon') != null
    },
    hasSpinner() {
      return this.getSearchParam('spinner') != null
    },
  }
}
</script>
