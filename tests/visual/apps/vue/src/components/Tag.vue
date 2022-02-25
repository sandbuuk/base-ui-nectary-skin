<template>
  <sinch-tag
    v-bind:category="category"
    v-bind:text="text"
    v-bind:small="isSmall"
    v-bind:inverted="isInverted"
  >
    <sinch-icon-open-in-new v-if="hasIcon" size="16" slot="icon"></sinch-icon-open-in-new>
    <sinch-tag-close
      v-if="isDismissable"
      slot="close"
      v-bind:small="isSmall"
      @click="onClick"
      @focusin="onFocus"
      @focusout="onBlur"
    ></sinch-tag-close>
  </sinch-tag>
</template>

<script>
export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onClick() {
      window.dispatchEvent(new CustomEvent('sinch-tag-close-click'))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-tag-close-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-tag-close-blur'))
    }
  },
  computed: {
    text() {
      return this.search.get('text') ?? ''
    },
    category() {
      return this.search.get('category') ?? undefined
    },
    isDismissable() {
      return this.search.get('dismissable') != null
    },
    isSmall() {
      return this.search.get('small') != null
    },
    isInverted() {
      return this.search.get('inverted') != null
    },
    hasIcon() {
      return this.search.get('icon') != null
    },
  },
}
</script>

