import type { FC } from 'react'
import '@nectary/components/toast'

const mdText = 'To set up the `LINE`, read and **accept** the `LINE` [terms & conditions](https://www.youtube.com/watch?v=dQw4w9WgXcQ).'

export const MarkdownExample: FC = () => (
  <sinch-toast type="info" text={mdText}/>
)
