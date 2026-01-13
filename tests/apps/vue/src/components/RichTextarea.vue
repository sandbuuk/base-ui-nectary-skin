<template>
  <sinch-rich-textarea :placeholder="placeholderText" :value="value" @--change="onChange" @--focus="onFocus"
    @--blur="onBlur">
    <template v-if="hasTop">
      <sinch-button slot="top" size="s" id="format-italic" aria-label="Format italic" @--click="onFormatItalic">
        <sinch-icon icons-version="2" name="fa-italic" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="top" size="s" id="format-bold" aria-label="Format bold" @--click="onFormatBold">
        <sinch-icon icons-version="2" name="fa-bold" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="top" size="s" id="format-strikethrough" aria-label="Format strikethrough"
        @--click="onFormatStrikethrough">
        <sinch-icon icons-version="2" name="fa-strikethrough" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="top" size="s" id="format-code-tag" aria-label="Format code tag" @--click="onFormatCodeTag">
        <sinch-icon icons-version="2" name="fa-code" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="top" size="s" id="format-ulist" aria-label="Format list bulleted"
        @--click="onFormatListBulleted">
        <sinch-icon icons-version="2" name="fa-list-ul" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="top" size="s" id="format-olist" aria-label="Format list numbered"
        @--click="onFormatListNumbered">
        <sinch-icon icons-version="2" name="fa-list-ol" slot="icon"></sinch-icon>
      </sinch-button>
    </template>
    <template v-if="hasBottom">
      <sinch-button slot="bottom" size="s" aria-label="Attach files">
        <sinch-icon icons-version="2" name="fa-folder" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" size="s" aria-label="Variables">
        <sinch-icon icons-version="2" name="fa-brackets-curly" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" size="s" aria-label="Options">
        <sinch-icon icons-version="2" name="fa-ellipsis" slot="icon"></sinch-icon>
      </sinch-button>
      <sinch-button slot="bottom" type="primary" size="s" aria-label="Send" text="Send" style="margin-left: auto;">
        <sinch-icon icons-version="2" name="fa-paper-plane-top" slot="right-icon"></sinch-icon>
      </sinch-button>
    </template>
  </sinch-rich-textarea>
</template>

<script>
import '@nectary/components/rich-textarea'
import '@nectary/components/button'
import '@nectary/components/icon'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~😆 account __manager__ or {{JohnDoe}}.

* list item 1
  1. inner item 1
  1. inner _item 2_
     * list \`LINE\` item 2
     * list __item 3__
  1. inner ___item 2___
* list ~~item 2~~
  * list item 3

1. level 0
   2. level 1
      3. level 2
      3. inner item 2
   2. inner item 2
`

export default {
  methods: {
    onChange(e) {
      this.value = e.detail
      window.dispatchEvent(new CustomEvent('sinch-rich-textarea-change', {detail: e.detail}))
    },
    onFocus() {
      window.dispatchEvent(new CustomEvent('sinch-rich-textarea-focus'))
    },
    onBlur() {
      window.dispatchEvent(new CustomEvent('sinch-rich-textarea-blur'))
    },
    onFormatItalic() {

    },
    onFormatBold() {

    },
    onFormatStrikethrough() {

    },
    onFormatCodeTag() {

    },
    onFormatListBulleted() {

    },
    onFormatListNumbered() {

    }
  },
  computed: {
    placeholderText() {
      return this.$route.query.placeholder
    },
    hasTop() {
      return this.$route.query.top != null
    },
    hasBottom() {
      return this.$route.query.bottom != null
    }
  },
  data() {
    return {
      value: this.$route.query.example === 'md' ? mdText : (this.$route.query.value ?? '')
    }
  }
}
</script>
