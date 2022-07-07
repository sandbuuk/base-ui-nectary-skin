import '@sinch-engage/nectary/button'
import type { FC } from 'react'

export const TypeCtaSecondaryExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-secondary"
      onClick={onClick}
    />
  )
}
