import type { TSinchPopoverOrientation } from '@sinch-engage/nectary/popover'
import type { FC } from 'react'

type TPopover = {
  search: URLSearchParams,
}

export const Popover: FC<TPopover> = ({ search }) => {
  const orientation = search.get('orientation') as TSinchPopoverOrientation ?? undefined

  return (
    <sinch-popover
      open
      orientation={orientation}
      aria-label="Popover"
      onClose={() => {
        window.dispatchEvent(new CustomEvent('sinch-popover-close'))
      }}
    >
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Some content"
        aria-label="Button"
        onClick={() => {}}
      />
      <section slot="content" style={{ width: '240px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</section>
    </sinch-popover>
  )
}
