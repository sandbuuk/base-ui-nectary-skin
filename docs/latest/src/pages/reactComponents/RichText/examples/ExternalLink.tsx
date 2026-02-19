import { RichText } from '@nectary/react'
import type { FC } from 'react'

const mdText = `
Head to the [Sinch website](https://www.sinch.com){external} for more info.
`

export const ExternalLinkExample: FC = () => (
  <RichText size="m" text={mdText}/>
)
