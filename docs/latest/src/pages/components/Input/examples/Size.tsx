import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/assets/icons/sentiment-satisfied'
import '@nectary/assets/icons/search'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}
const inputStyles: CSSProperties = {
  width: 200,
}

export const SizeExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <div style={wrapperStyles}>
      <sinch-input
        aria-label="Input"
        placeholder="Placeholder"
        size="l"
        style={inputStyles}
        value={state}
        on-change={(e) => setState(e.detail)}
      >
        <sinch-icon-search slot="icon"/>
        <sinch-button
          slot="right"
          aria-label="Click"
          on-click={() => {}}
        >
          <sinch-icon-sentiment-satisfied slot="icon"/>
        </sinch-button>
      </sinch-input>
      <sinch-input
        aria-label="Input"
        placeholder="Placeholder"
        size="m"
        style={inputStyles}
        value={state}
        on-change={(e) => setState(e.detail)}
      >
        <sinch-icon-search slot="icon"/>
        <sinch-button
          slot="right"
          aria-label="Click"
          on-click={() => {}}
        >
          <sinch-icon-sentiment-satisfied slot="icon"/>
        </sinch-button>
      </sinch-input>
      <sinch-input
        aria-label="Input"
        placeholder="Placeholder"
        size="s"
        style={inputStyles}
        value={state}
        on-change={(e) => setState(e.detail)}
      >
        <sinch-icon-search slot="icon"/>
        <sinch-button
          slot="right"
          aria-label="Click"
          on-click={() => {}}
        >
          <sinch-icon-sentiment-satisfied slot="icon"/>
        </sinch-button>
      </sinch-input>
    </div>
  )
}
