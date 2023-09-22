import type { FC } from 'react'
import '@nectary/components/inline-alert'

export const TypeInfoExample: FC = () => (
  <sinch-inline-alert
    type="info"
    caption="Information"
    text="Informative text"
  />
)
