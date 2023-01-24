import type { FC } from 'react'
import '@sinch-engage/nectary/rich-text'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

If ___you___ have *any questions*, contact your account __manager__.

~~Oops~~
Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

export const MarkdownExample: FC = () => (
  <sinch-rich-text size="m" text={mdText}/>
)
