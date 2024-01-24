import type { FC } from 'react'
import '@nectary/components/rich-text'

const mdText = `
Read the [terms & conditions](/t-and-c){use-history}.
`

export const HistoryLinkExample: FC = () => (
  <sinch-rich-text size="m" text={mdText}/>
)
