import type { FC } from 'react'
import '@nectary/components/text'
import '@nectary/components/code-tag'

export const CodeExample: FC = () => (
  <sinch-text type="m">
    Provide the <sinch-code-tag text="<Component/>"/> with the <sinch-code-tag text="value"/> property
  </sinch-text>
)
