import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/text'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
}

export const ButtonCounterExample: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="test" style={wrapperStyles}>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="primary"
        size="l"
        on-click={() => {
          setCount((prevCount) => prevCount + 1)
        }}
      />
      <sinch-text type="xs">{`counter is at current value ${count}`}</sinch-text>
    </div>
  )
}
