import type { FC } from 'react'
import '@sinch-engage/nectary/link'

export const ClickExample: FC = () => (
  <sinch-link
    text="Link"
    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    aria-label="Link"
    preventDefault
    on-click={() => console.log('click')}
  />
)
