import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/rich-text'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~😆 account __manager__ or {{JohnDoe}}.

paragraph text
* list item 1
  1. sub item 1
    * sub sub item
    * pre \`LINE\` post
  2. sub *item* 2
sub line
* list item 2
lorem ipsum
lorem ipsum


Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'
const tagText = 'Hello {{JohnDoe}} this is a tag example'

export const RichText: FC = () => {
  const [search] = useComponentSearchParams('rich-text')
  const size: any = search.get('size') ?? undefined
  const example = search.get('example')

  let text = shortText

  if (example === 'md') {
    text = mdText
  } else if (example === 'long') {
    text = longText
  } else if (example === 'tag') {
    text = tagText
  }

  return (
    <sinch-rich-text
      size={size}
      text={text}
    />
  )
}
