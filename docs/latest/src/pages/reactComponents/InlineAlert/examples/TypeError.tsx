import { InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const TypeErrorExample: FC = () => (
  <InlineAlert
    type="error"
    caption="Error"
    text="Error text"
  />
)
