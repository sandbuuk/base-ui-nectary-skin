import '@sinch-engage/nectary/button'
import type { FC } from 'react'

export const TypeDestructiveExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-button
      text="Click"
      aria-label="Click"
      type="destructive"
      onClick={onClick}
    />
  )
}
