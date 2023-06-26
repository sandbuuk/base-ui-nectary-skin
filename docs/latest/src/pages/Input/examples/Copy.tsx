import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/input'

const inputStyles: CSSProperties = {
  width: 300,
}

export const CopyExample: FC = () => {
  const [state, setState] = useState('')
  const onCopy = (e: CustomEvent<{value: string}>) => {
    console.log(e.detail.value)
  }

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      style={inputStyles}
      value={state}
      on-change={(e) => setState(e.detail)}
      on-copy={onCopy}
    />
  )
}
