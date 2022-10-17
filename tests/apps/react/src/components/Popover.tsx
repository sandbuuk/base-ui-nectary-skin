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
  const hasTip = search.get('tip') !== null
  const hasOffset = search.get('offset') !== null
  const onClose = () => {
    window.dispatchEvent(new CustomEvent('sinch-popover-close'))
    setOpen(false)
  }
  const onOpen = () => {
    window.dispatchEvent(new CustomEvent('sinch-popover-open'))
    setOpen(true)
  }

  if (hasOffset) {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50px', backgroundColor: 'red' }}/>
        <sinch-popover
          open={isOpen}
          aria-label="Popover"
          on-close={onClose}
        >
          <sinch-button
            slot="target"
            type="cta-secondary"
            text="Some content"
            aria-label="Button"
            on-click={onOpen}
            style={{ margin: '0 0 20px -20px', position: 'relative', left: '20px', transform: 'translate(0, 20px)' }}
          />
          <section
            slot="content"
            style={{ maxWidth: '240px', padding: '12px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </section>
        </sinch-popover>
        <div style={{ width: '50px', backgroundColor: 'red' }}/>
      </div>
    )
  }

  return (
    <sinch-popover
      open={isOpen}
      modal={isModal}
      tip={hasTip}
      orientation={orientation}
      aria-label="Popover"
      on-close={onClose}
    >
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Some content"
        aria-label="Button"
        on-click={onOpen}
      />
      <section
        slot="content"
        style={{ maxWidth: '240px', padding: '12px' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </section>
    </sinch-popover>
  )
}
