import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'

export const TypeErrorExample: FC = () => (
  <sinch-inline-alert
    type="error"
    caption="Error"
    text="Error text"
  />
)
