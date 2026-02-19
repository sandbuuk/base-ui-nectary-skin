import { RichText } from '@nectary/react'
import type { FC } from 'react'

const mdText = `
Read the [terms & conditions](/t-and-c){use-history}.
`

export const HistoryLinkExample: FC = () => (
  <RichText size="m" text={mdText}/>
)
