<template>
<sinch-rich-text :size="size" :text="text"></sinch-rich-text>
</template>

<script>
import '@nectary/components/rich-text'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~ account __manager__.

Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    text() {
      const example = this.$route.query.example

      if(example === 'md') {
        return mdText
      }

      if (example === 'long') {
        return longText
      }

      return shortText
    },
    size() {
      return this.$route.query.size
    },
  },
}
</script>

