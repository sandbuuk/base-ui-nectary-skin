import type { FC } from 'react'
import '@nectary/components/inline-alert'

export const TypeSuccessTextOnlyExample: FC = () => (
  <sinch-inline-alert
    type="success"
    text="This is a alert where we want a text without a caption. Perhaps use this alert when you want an explanatory text only."
  />
)
