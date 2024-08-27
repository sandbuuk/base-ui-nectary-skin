import type { FC } from 'react'
import '@nectary/components/inline-alert'
import '@nectary/components/button'
import '@nectary/components/icon'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

If ___you___ have *any questions*, contact your account __manager__.

~~Oops~~
Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

export const MarkdownExample: FC = () => (
  <sinch-inline-alert type="info" caption="Markdown" text={mdText}>
    <sinch-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
    </sinch-button>
  </sinch-inline-alert>
)
