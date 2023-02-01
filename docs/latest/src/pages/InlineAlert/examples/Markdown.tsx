import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/icons/close'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

If ___you___ have *any questions*, contact your account __manager__.

~~Oops~~
Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

export const MarkdownExample: FC = () => (
  <sinch-inline-alert type="info" caption="Markdown" text={mdText}>
    <sinch-icon-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon-close slot="icon"/>
    </sinch-icon-button>
  </sinch-inline-alert>
)
