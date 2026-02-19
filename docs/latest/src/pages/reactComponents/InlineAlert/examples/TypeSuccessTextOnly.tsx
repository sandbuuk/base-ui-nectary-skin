import { InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const TypeSuccessTextOnlyExample: FC = () => (
  <InlineAlert
    type="success"
    text="This is a alert where we want a text without a caption. Perhaps use this alert when you want an explanatory text only."
  />
)
