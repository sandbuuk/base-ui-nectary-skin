<template>
<sinch-inline-alert
  :type="type"
  :caption="caption"
  :text="text">
  <sinch-icon-button
    v-if="hasClose"
    slot="close"
    size="s"
    @--click="onCloseClick"
    @--focus="onCloseFocus"
    @--blur="onCloseBlur">
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
  <sinch-button
    v-if="hasAction"
    slot="action"
    type="cta-secondary"
    size="s"
    text="This is a Button!"
    @--click="onButtonClick"
    @--focus="onButtonFocus"
    @--blur="onButtonBlur">
  </sinch-button>
</sinch-inline-alert>
</template>

<script>
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/close'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~ account __manager__.

Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'

const longCaption = 'It has survived not only five centuries, but also the leap into electronic typesetting'
const shortCaption = 'It has survived'

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onCloseClick() {
      window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-click'))
    },
    onCloseFocus() {
      window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-focus'))
    },
    onCloseBlur() {
      window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-blur'))
    },
    onButtonClick() {
      window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-click'))
    },
    onButtonFocus() {
      window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-focus'))
    },
    onButtonBlur() {
      window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-blur'))
    }
  },
  computed: {
    caption() {
      const example = this.search.get('example')

      return example === 'long' ? longCaption : shortCaption
    },
    text() {
      const example = this.search.get('example')

      if(example === 'md') {
        return mdText
      }

      if (example === 'long') {
        return longText
      }

      return shortText
    },
    type() {
      return this.search.get('type')
    },
    hasClose() {
      return this.search.get('close') != null
    },
    hasAction() {
      return this.search.get('action') != null
    },
  },
}
</script>

