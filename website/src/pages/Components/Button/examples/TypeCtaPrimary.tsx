import '@sinch-engage/nectary/button'
import type { FC } from 'react'

export const TypeCtaPrimaryExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-primary"
      onClick={onClick}
    />
  )
}
