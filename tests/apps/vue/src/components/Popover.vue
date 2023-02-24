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
      <section slot="content" style="max-width: 240px; padding: 12px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</section>
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
    <section slot="content" style="max-width: 240px; padding: 12px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</section>
  </sinch-popover>
</template>

<script>
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/button'

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
      return this.search.get('orientation')
    },
    isModal() {
      return this.search.get('modal') !== null
    },
    isOffsetExample() {
      return this.search.get('example') === 'offset'
    },
    isSwitchContentExample() {
      return this.search.get('example') === 'switch-content'
    },
    isDefaultExample() {
      return this.search.get('example') === null
    }
  },
  data() {
    return {
      isOpen: this.search.get('open') !== null,
      isOtherComponent: false
    }
  }
}
</script>

