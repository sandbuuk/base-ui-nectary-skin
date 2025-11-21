import type { FC } from 'react'
import '@nectary/components/inline-alert'

export const CustomIconExample: FC = () => (
  <sinch-inline-alert
    type="info"
    caption="Custom Icon"
    text="Custom icon text"
    icon="ai"
  />
)
