import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/button'

type TPopover = {
  search: URLSearchParams,
}

export const Popover: FC<TPopover> = ({ search }) => {
  const [isOpen, setOpen] = useState(search.get('open') !== null)
  const orientation: any = search.get('orientation')
  const isModal = search.get('modal') !== null

  return (
    <sinch-popover
      open={isOpen}
      modal={isModal}
      orientation={orientation}
      aria-label="Popover"
      onClose={() => {
        window.dispatchEvent(new CustomEvent('sinch-popover-close'))
        setOpen(false)
      }}
    >
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Some content"
        aria-label="Button"
        onClick={() => {
          window.dispatchEvent(new CustomEvent('sinch-popover-open'))
          setOpen(true)
        }}
      />
      <section slot="content" style={{ maxWidth: '240px', padding: '12px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</section>
    </sinch-popover>
  )
}
