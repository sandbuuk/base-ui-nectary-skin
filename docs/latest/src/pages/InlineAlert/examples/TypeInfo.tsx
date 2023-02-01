import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'

export const TypeInfoExample: FC = () => (
  <sinch-inline-alert
    type="info"
    caption="Information"
    text="Informative text"
  />
)
