import { InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const TypeWarningExample: FC = () => (
  <InlineAlert
    type="warn"
    caption="Warning"
    text="Warning text"
  />
)
