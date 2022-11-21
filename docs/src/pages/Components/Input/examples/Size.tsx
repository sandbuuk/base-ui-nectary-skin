import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/sentiment-satisfied'
import '@sinch-engage/nectary/icons/search'

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
        <sinch-icon-button
          slot="right"
          aria-label="Click"
          on-click={() => {}}
        >
          <sinch-icon-sentiment-satisfied slot="icon"/>
        </sinch-icon-button>
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
        <sinch-icon-button
          slot="right"
          aria-label="Click"
          on-click={() => {}}
        >
          <sinch-icon-sentiment-satisfied slot="icon"/>
        </sinch-icon-button>
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
        <sinch-icon-button
          slot="right"
          aria-label="Click"
          on-click={() => {}}
        >
          <sinch-icon-sentiment-satisfied slot="icon"/>
        </sinch-icon-button>
      </sinch-input>
    </div>
  )
}
