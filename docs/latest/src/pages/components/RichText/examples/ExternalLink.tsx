import type { FC } from 'react'
import '@nectary/components/rich-text'

const mdText = `
Head to the [Sinch website](https://www.sinch.com){external} for more info.
`

export const ExternalLinkExample: FC = () => (
  <sinch-rich-text size="m" text={mdText}/>
)
