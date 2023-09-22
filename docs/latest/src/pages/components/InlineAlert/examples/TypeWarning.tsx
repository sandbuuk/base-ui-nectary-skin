import type { FC } from 'react'
import '@nectary/components/inline-alert'

export const TypeWarningExample: FC = () => (
  <sinch-inline-alert
    type="warn"
    caption="Warning"
    text="Warning text"
  />
)
