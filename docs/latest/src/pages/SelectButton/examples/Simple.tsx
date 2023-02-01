import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/select-button'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const SimpleExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <div style={wrapperStyles}>
      <sinch-select-button
        text="Something"
        placeholder="Select something"
        aria-label="Select Button"
        size="l"
        on-click={onClick}
      />
      <sinch-select-button
        text="Something"
        placeholder="Select something"
        aria-label="Select Button"
        size="m"
        on-click={onClick}
      />
      <sinch-select-button
        text="Something"
        placeholder="Select something"
        aria-label="Select Button"
        size="s"
        on-click={onClick}
      />
    </div>
  )
}
