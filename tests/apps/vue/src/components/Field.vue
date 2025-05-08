<template>
  <sinch-field :label="labelText" :optionaltext="optionalText" :additionaltext="additionalText"
    :invalidtext="invalidText">
    <slot></slot>
    <sinch-help-tooltip v-if="!$slots.default && tooltipText != null" slot="tooltip" :text="tooltipText"></sinch-help-tooltip>
    <sinch-input v-if="!$slots.default" slot="input" :placeholder="placeholderText" :disabled="isDisabled" :invalid="invalidText != null"
      :value="value" @--change="onChange">
      <sinch-icon icons-version="2" name="fa-magnifying-glass" slot="icon"></sinch-icon>
      <sinch-tag slot="right" text="text"></sinch-tag>
    </sinch-input>
  </sinch-field>
</template>

<script>
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/help-tooltip'
import '@nectary/components/tag'
import '@nectary/components/icon'
import { getSearchKey } from '../utils'
export default {
  props: {
    searchPrefix: {
      type: String,
      default: 'field'
    }
  },
  methods: {
    onChange(e) {
      this.value = e.detail
    },
    getSearchParam(param) {
      return this.$route.query[getSearchKey(param, this.searchPrefix)]
    }
  },
  computed: {
    placeholderText() {
      return this.getSearchParam('placeholder')
    },
    tooltipText() {
      return this.getSearchParam('tooltip')
    },
    labelText() {
      return this.getSearchParam('label')
    },
    optionalText() {
      return this.getSearchParam('optional')
    },
    additionalText() {
      return this.getSearchParam('additional')
    },
    invalidText() {
      return this.getSearchParam('invalid')
    },
    isDisabled() {
      return this.getSearchParam('disabled') != null
    }
  },
  data() {
    return {
      value: this.getSearchParam('value') ?? ''
    }
  }
}
</script>
