import { Toast } from '@nectary/react'
import type { FC } from 'react'

const mdText = 'To set up the `LINE`, read and **accept** the `LINE` [terms & conditions](https://www.youtube.com/watch?v=dQw4w9WgXcQ).'

export const MarkdownExample: FC = () => (
  <Toast type="info" text={mdText}/>
)
