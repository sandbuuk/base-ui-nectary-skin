<template>
  <div v-if="isOffsetExample" style="display: flex;">
    <div style="width: 50px; background-color: red;"></div>
    <sinch-popover :open="isOpen" @--close="onClose">
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Some content"
        aria-label="Button"
        @--click="onOpen"
        style="margin: 0 0 20px -20px; position: relative; left: 20px; transform: translate(0, 20px)"
      ></sinch-button>
      <sinch-text slot="content" type="m" style="max-width: 240px; padding: 12px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</sinch-text>
    </sinch-popover>
    <div style="width: 50px; background-color: red;"></div>
  </div>

  <sinch-popover
    v-if="isSwitchContentExample"
    open
    aria-label="Popover"
    orientation="bottom-right"
  >
    <div slot="target">
      <sinch-button
        id="open"
        type="cta-secondary"
        text="Open"
        aria-label="Open"
        @--click="onOpen">
      </sinch-button>
      <sinch-button
        id="switch-content"
        type="cta-secondary"
        text="Switch"
        aria-label="Switch"
        @--click="onSwitch"
      />
    </div>
    <div
      v-if="isOtherComponent"
      slot="content"
      style="width:240px;height:120px;background-color:red;"
    />
    <div
      v-if="!isOtherComponent"
      slot="content"
      style="width:120px;height:240px;background-color:green;"
    />
  </sinch-popover>

  <sinch-popover
    v-if="isDefaultExample"
    :open="isOpen"
    :modal="isModal"
    :orientation="orientation"
    @--close="onClose">
    <sinch-button
      slot="target"
      type="cta-secondary"
      text="Some content"
      aria-label="Button"
      @--click="onOpen">
    </sinch-button>
    <sinch-text slot="content" type="m" style="max-width: 240px; padding: 12px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</sinch-text>
  </sinch-popover>
</template>

<script>
import '@nectary/components/popover'
import '@nectary/components/button'
import '@nectary/components/text'

export default {
  methods: {
    onClose() {
      window.dispatchEvent(new CustomEvent('sinch-popover-close'))
      this.isOpen = false
    },
    onOpen() {
      window.dispatchEvent(new CustomEvent('sinch-popover-open'))
      this.isOpen = true
    },
    onSwitch() {
      this.isOtherComponent = !this.isOtherComponent
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    orientation() {
      return this.$route.query.orientation
    },
    isModal() {
      return this.$route.query.modal != null
    },
    isOffsetExample() {
      return this.$route.query.example === 'offset'
    },
    isSwitchContentExample() {
      return this.$route.query.example === 'switch-content'
    },
    isDefaultExample() {
      return this.$route.query.example == null
    }
  },
  data() {
    return {
      isOpen: this.$route.query.open != null,
      isOtherComponent: false
    }
  }
}
</script>

