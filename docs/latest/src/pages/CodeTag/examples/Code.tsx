import type { FC } from 'react'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/code-tag'

export const CodeExample: FC = () => (
  <sinch-text type="m">
    Provide the <sinch-code-tag text="<Component/>"/> with the <sinch-code-tag text="value"/> property
  </sinch-text>
)
