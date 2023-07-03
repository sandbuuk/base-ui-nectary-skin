import { useState } from 'react'
import type { TSinchInputClipboardEvent } from '@sinch-engage/nectary/input/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'

export const MaskedPhoneExample: FC = () => {
  const [state, setState] = useState('')
  const onChange = (e: CustomEvent<string>) => setState(e.detail)
  const onPaste = (e: TSinchInputClipboardEvent) => {
    const value = e.detail.value

    if (value.length === 10 && value.startsWith('0')) {
      e.detail.replaceWith(value.substring(1))
    }
  }

  return (
    <sinch-input
      aria-label="Phone Input"
      mask="+46-00-000-00-00"
      value={state}
      on-change={onChange}
      on-paste={onPaste}
    />
  )
}
