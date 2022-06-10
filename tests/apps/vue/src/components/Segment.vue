<template>
  <sinch-segment :caption="caption" :collapsed="isCollapsed" style="flex: 1;min-height: 0;">
    <sinch-segment-collapse v-if="hasCollapse" slot="collapse" :value="isCollapsed" @change="onCollapse" @focus="onCollapseFocus" @blur="onCollapseBlur"></sinch-segment-collapse>
    <div v-if="hasContent" slot="content" style="display: flex; flex-direction: column;">
      <section style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
      <sinch-input label="Label" value=""></sinch-input>
      <sinch-input label="Label" value=""></sinch-input>
    </div>
    <sinch-icon-branded-chatbot v-if="hasIcon" size="32" slot="icon"></sinch-icon-branded-chatbot>
    <sinch-tag v-if="hasInfo" text="Label" slot="info"></sinch-tag>
    <sinch-icon-button v-if="hasInfo" small slot="info">
      <sinch-icon-apps slot="icon"></sinch-icon-apps>
    </sinch-icon-button>
    <sinch-checkbox v-if="hasAction" text="Checkbox" slot="action"></sinch-checkbox>
    <sinch-button v-if="hasAction" text="Cancel" type="secondary" slot="action" small></sinch-button>
    <sinch-button v-if="hasAction" text="Ok" type="primary" slot="action" small></sinch-button>
  </sinch-segment>
</template>
<script>
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
