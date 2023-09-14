<template>
  <sinch-segment :caption="caption" :collapsed="isCollapsed" style="flex: 1;min-height: 0;">
    <sinch-segment-collapse v-if="hasCollapse" slot="collapse" :value="isCollapsed" @--change="onCollapse" @focus="onCollapseFocus" @blur="onCollapseBlur"></sinch-segment-collapse>
    <div v-if="hasContent" slot="content" style="display: flex; flex-direction: column; gap: 16px;">
      <sinch-text type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</sinch-text>
      <sinch-field slot="content" label="Label">
        <sinch-input slot="input" aria-label="Input" value=""></sinch-input>
      </sinch-field>
      <sinch-field slot="content" label="Label">
        <sinch-input slot="input" aria-label="Input" value=""></sinch-input>
      </sinch-field>
    </div>
    <sinch-icon-branded-chatbot v-if="hasIcon" size="32" slot="icon"></sinch-icon-branded-chatbot>
    <sinch-tag v-if="hasInfo" text="Label" slot="info"></sinch-tag>
    <sinch-icon-button v-if="hasInfo" size="s" slot="info">
      <sinch-icon-apps slot="icon"></sinch-icon-apps>
    </sinch-icon-button>
    <div v-if="hasPreview" slot="preview" style="display: flex;flex-direction: column;background-color: #F1F3F4;align-items: center;justify-content: center;height: 100%;">
      <sinch-text type="m">Replace me!</sinch-text>
      <sinch-text type="xs">Im a template component</sinch-text>
    </div>
    <sinch-checkbox v-if="hasAction" text="Checkbox" slot="action"></sinch-checkbox>
    <sinch-button v-if="hasAction" text="Cancel" type="secondary" slot="action" size="s"></sinch-button>
    <sinch-button v-if="hasAction" text="Ok" type="primary" slot="action" size="s"></sinch-button>
  </sinch-segment>
</template>

<script>
import '@nectary/components/segment'
import '@nectary/components/segment-collapse'
import '@nectary/components/input'
import '@nectary/components/tag'
import '@nectary/assets/icons/apps'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/components/icon-button'
import '@nectary/components/button'
import '@nectary/components/checkbox'
import '@nectary/components/text'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    caption() {
      return this.search.get('caption') ?? ''
    },
    hasContent() {
      return this.search.get('content') !== null
    },
    hasIcon() {
      return this.search.get('icon') !== null
    },
    hasCollapse() {
      return this.search.get('collapse') !== null
    },
    hasAction() {
      return this.search.get('action') !== null
    },
    hasInfo() {
      return this.search.get('info') !== null
    },
    hasPreview() {
      return this.search.get('preview') !== null
    }
  },
  methods: {
    onCollapse(e) {
      this.isCollapsed = e.detail
      window.dispatchEvent(new CustomEvent('sinch-segment-collapse-change', {detail: e.detail}))
    },
    onCollapseFocus() {
      window.dispatchEvent(new CustomEvent('sinch-segment-collapse-focus'))
    },
    onCollapseBlur() {
      window.dispatchEvent(new CustomEvent('sinch-segment-collapse-blur'))
    }
  },
  data() {
    return {
      isCollapsed: false
    }
  }
}
</script>
