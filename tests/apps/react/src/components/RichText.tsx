import type { FC } from 'react'
import '@sinch-engage/nectary/rich-text'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~ account __manager__.

Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'

type TRichText = {
  search: URLSearchParams,
}

export const RichText: FC<TRichText> = ({ search }) => {
  const size: any = search.get('size') ?? undefined
  const example = search.get('example')

  let text = shortText

  if (example === 'md') {
    text = mdText
  } else if (example === 'long') {
    text = longText
  }

  return (
    <sinch-rich-text
      size={size}
      text={text}
    />
  )
}
