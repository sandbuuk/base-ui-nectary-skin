import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/checkbox'

const mdText = `To set up the \`LINE\`, read and accept the \`LINE\` [terms & conditions](https://www.youtube.com/watch?v=dQw4w9WgXcQ).`

export const RichTextExample: FC = () => {
  const [isChecked, setChecked] = useState(false)
  const onChange = (e: CustomEvent<boolean>) => setChecked(e.detail)

  return (
    <sinch-checkbox
      text={mdText}
      aria-label={mdText}
      checked={isChecked}
      on-change={onChange}
    />
  )
}
