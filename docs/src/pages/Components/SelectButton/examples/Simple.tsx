import type { FC } from 'react'
import '@sinch-engage/nectary/select-button'

export const SimpleExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-select-button
      text="Something"
      placeholder="Select something"
      aria-label="Select Button"
      on-click={onClick}
    />
  )
}
