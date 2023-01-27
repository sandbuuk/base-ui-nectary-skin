import type { FC } from 'react'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'

export const ExternalExample: FC = () => (
  <sinch-text type="m">
    <sinch-text type="m" inline>Here is </sinch-text>
    <sinch-link
      text="external link"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      aria-label="Link"
      external
    />
  </sinch-text>
)
