<template>
  <div v-if="hasOffset" style="display: flex;">
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
    v-if="!hasOffset"
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
    hasOffset() {
      return this.search.get('offset') !== null
    }
  },
  data() {
    return {
      isOpen: this.search.get('open') !== null
    }
  }
}
</script>

