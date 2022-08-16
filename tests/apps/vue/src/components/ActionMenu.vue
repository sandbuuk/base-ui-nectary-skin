<template>
  <sinch-action-menu
    :open="isOpen"
    :modal="isModal"
    :orientation="orientation"
    :maxvisibleitems="maxVisibleItems"
    @--close="onClose">
    <sinch-button
      slot="target"
      type="cta-secondary"
      text="Some content"
      aria-label="Button"
      @click="onOpen"
    ></sinch-button>
    <sinch-action-menu-option @click="onClick" text="Option 1 value long long long" slot="option">
      <sinch-icon-open-in-new slot="icon"/>
    </sinch-action-menu-option>
    <sinch-action-menu-option @click="onClick" text="Option 2 value" slot="option" disabled>
      <sinch-icon-open-in-new slot="icon"/>
    </sinch-action-menu-option>
    <sinch-action-menu-option @click="onClick" text="Option 3 value" slot="option"></sinch-action-menu-option>
    <sinch-action-menu-option @click="onClick" text="Option 4 value" slot="option"></sinch-action-menu-option>
  </sinch-action-menu>
</template>

<script>
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'

export default {
  methods: {
    onClick(e) {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-click', {detail: e.target.getAttribute('text')}))
      this.isOpen = false
    },
    onClose() {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-close'))
      this.isOpen = false
    },
    onOpen() {
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
    maxVisibleItems() {
      const val = this.search.get('maxvisibleitems')
      return val !== null ? parseInt(val) : null
    },
    isModal() {
      return this.search.get('modal') !== null
    },
  },
  data() {
    return {
      isOpen: this.search.get('open') !== null
    }
  }
}
</script>

