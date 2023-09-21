import { useState } from 'react'
import type { TSinchInputClipboardEvent } from '@nectary/components/input/types'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'

const inputStyles: CSSProperties = {
  width: 300,
}

export const PasteExample: FC = () => {
  const [state, setState] = useState('')
  const onChange = (e: CustomEvent<string>) => setState(e.detail)
  const onPaste = (e: TSinchInputClipboardEvent) => {
    // Transform the original value
    const value = e.detail.value.toUpperCase()

    // Replace value in the paste event
    // This value will replace the original from Clipboard
    e.detail.replaceWith(value)
  }

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      style={inputStyles}
      value={state}
      on-change={onChange}
      on-paste={onPaste}
    />
  )
}
