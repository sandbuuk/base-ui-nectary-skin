import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/button'
import '@nectary/components/text'

type TPopover = {
  search: URLSearchParams,
}

const PopoverExampleOffset: FC<TPopover> = ({ search }) => {
  const [isOpen, setOpen] = useState(search.get('open') !== null)

  const onClose = () => {
    window.dispatchEvent(new CustomEvent('sinch-popover-close'))
    setOpen(false)
  }
  const onOpen = () => {
    window.dispatchEvent(new CustomEvent('sinch-popover-open'))
    setOpen(true)
  }

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
        <sinch-text
          slot="content"
          type="m"
          style={{ maxWidth: '240px', padding: '12px', fontWeight: 'normal' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </sinch-text>
      </sinch-popover>
      <div style={{ width: '50px', backgroundColor: 'red' }}/>
    </div>
  )
}

const PopoverExampleSwitchContent: FC<TPopover> = () => {
  const [isOpen, setOpen] = useState(false)
  const [isOtherContent, setOtherContent] = useState(false)
  const onSwitch = () => {
    setOtherContent((val) => !val)
  }

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Popover"
      orientation="bottom-right"
    >
      <div slot="target">
        <sinch-button
          id="open"
          type="cta-secondary"
          text="Open"
          aria-label="Open"
          on-click={() => setOpen(true)}
        />
        <sinch-button
          id="switch-content"
          type="cta-secondary"
          text="Switch"
          aria-label="Switch"
          on-click={onSwitch}
        />
      </div>
      {isOtherContent ? (
        <div
          key="1"
          slot="content"
          style={{ width: '240px', height: '120px', backgroundColor: 'red' }}
        />
      ) : (
        <div
          key="2"
          slot="content"
          style={{ width: '120px', height: '240px', backgroundColor: 'green' }}
        />
      )}
    </sinch-popover>
  )
}

export const Popover: FC<TPopover> = ({ search }) => {
  const [isOpen, setOpen] = useState(search.get('open') !== null)
  const orientation: any = search.get('orientation')
  const isModal = search.get('modal') !== null
  const hasTip = search.get('tip') !== null
  const example = search.get('example')
  const onClose = () => {
    window.dispatchEvent(new CustomEvent('sinch-popover-close'))
    setOpen(false)
  }
  const onOpen = () => {
    window.dispatchEvent(new CustomEvent('sinch-popover-open'))
    setOpen(true)
  }

  if (example === 'offset') {
    return <PopoverExampleOffset search={search}/>
  }

  if (example === 'switch-content') {
    return <PopoverExampleSwitchContent search={search}/>
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
      <sinch-text
        slot="content"
        type="m"
        style={{ maxWidth: '240px', padding: '12px' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </sinch-text>
    </sinch-popover>
  )
}
