import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/components/icon'

export const OnDashFocusExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
      on-change={(e) => setState(e.detail)}
      on-focus={() => console.log('INPUT FOCUS')}
    >
      <sinch-button
        slot="right"
        aria-label="Test"
        size="s"
        on-focus={() => console.log('BUTTON FOCUS')}
      >
        <sinch-icon name="fa-calendar" slot="icon"/>
      </sinch-button>
    </sinch-input>
  )
}
