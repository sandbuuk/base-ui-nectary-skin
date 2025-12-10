
import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/textarea'

export const MaxRowsExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      resizable
      maxRows={6}
      rows={5}
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
