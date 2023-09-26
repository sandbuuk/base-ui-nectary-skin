import { useState } from 'react'
import type { TSinchInputClipboardEvent } from '@nectary/components/input/types'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'

const inputStyles: CSSProperties = {
  width: 300,
}

export const CopyExample: FC = () => {
  const [state, setState] = useState('')
  const onChange = (e: CustomEvent<string>) => setState(e.detail)
  const onCopy = (e: TSinchInputClipboardEvent) => {
    // Transform the original value
    const value = e.detail.value.toUpperCase()

    // Replace value in the "copy" event
    // This value will replace the original one in the Clipboard
    e.detail.replaceWith(value)
  }

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      style={inputStyles}
      value={state}
      on-change={onChange}
      on-copy={onCopy}
      on-cut={onCopy}
    />
  )
}
