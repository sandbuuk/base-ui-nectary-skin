import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'

export const TypeWarningExample: FC = () => (
  <sinch-inline-alert type="warn" caption="Warning" text="Warning text"/>
)
