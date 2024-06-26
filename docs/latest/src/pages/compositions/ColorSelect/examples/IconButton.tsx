import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/color-swatch'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/button'

const vibrantColorNames = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'gray']

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
      <sinch-button
        slot="target"
        aria-label="Open color select"
        size="s"
        on-click={onOpen}
      >
        <sinch-color-swatch slot="icon" name={value}/>
      </sinch-button>
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
