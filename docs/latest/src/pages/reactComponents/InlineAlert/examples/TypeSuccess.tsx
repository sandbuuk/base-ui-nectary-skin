import { InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const TypeSuccessExample: FC = () => (
  <InlineAlert
    type="success"
    caption="Success"
    text="Success text"
  />
)
