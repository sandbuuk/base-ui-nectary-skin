import type { FC } from 'react'
import '@nectary/components/select-button'

export const PlaceholderExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-select-button
      text=""
      placeholder="Select something"
      aria-label="Select Button"
      on-click={onClick}
    />
  )
}
