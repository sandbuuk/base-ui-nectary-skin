import type { FC } from 'react'
import '@nectary/components/text'
import '@nectary/components/link'

export const StandaloneExternalExample: FC = () => (
  <sinch-text type="m">
    <sinch-text type="m" inline>Here is </sinch-text>
    <sinch-link
      text="Standalone external link"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      aria-label="Link"
      standalone
      external
    />
  </sinch-text>
)
