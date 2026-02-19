import { InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const CustomIconExample: FC = () => (
  <InlineAlert
    type="info"
    caption="Custom Icon"
    text="Custom icon text"
    icon="ai"
  />
)
