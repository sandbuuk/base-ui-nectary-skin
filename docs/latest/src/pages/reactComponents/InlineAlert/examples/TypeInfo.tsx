import { InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const TypeInfoExample: FC = () => (
  <InlineAlert
    type="info"
    caption="Information"
    text="Informative text"
  />
)
