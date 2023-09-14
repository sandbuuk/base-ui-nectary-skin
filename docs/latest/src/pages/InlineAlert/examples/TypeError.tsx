import type { FC } from 'react'
import '@nectary/components/inline-alert'

export const TypeErrorExample: FC = () => (
  <sinch-inline-alert
    type="error"
    caption="Error"
    text="Error text"
  />
)
