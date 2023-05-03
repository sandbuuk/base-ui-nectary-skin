import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary/color-menu'

const vibrantColorNames = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']

export const IconButtonExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onChange = (e: CustomEvent<string>) => {
    onClose()
    setValue(e.detail)
  }

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Select color"
      orientation="bottom-right"
      modal
      on-close={onClose}
    >
      <sinch-icon-button
        slot="target"
        aria-label="Open color select"
        size="s"
        on-click={onOpen}
      >
        <sinch-color-swatch slot="icon" name={value}/>
      </sinch-icon-button>
      <sinch-color-menu
        slot="content"
        value={value}
        aria-label="Color menu"
        on-change={onChange}
      >
        {vibrantColorNames.map((c) => <sinch-color-menu-option key={c} value={c}/>)}
      </sinch-color-menu>
    </sinch-popover>
  )
}
