import type { FC } from 'react'
import '@nectary/components/text'
import '@nectary/components/link'

export const HistoryExample: FC = () => (
  <sinch-text type="m">
    <sinch-text type="m" inline>Here is </sinch-text>
    <sinch-link
      text="use history link"
      href="/pushed-via-history"
      use-history
      aria-label="Link"
    />
  </sinch-text>
)
