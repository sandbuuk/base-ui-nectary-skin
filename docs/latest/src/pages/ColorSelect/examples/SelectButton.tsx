import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary/color-menu'
import '@sinch-engage/nectary/color-menu-option'

const vibrantColorNames = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']

const buttonStyles: CSSProperties = {
  width: 200,
}

export const SelectButtonExample: FC = () => {
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
      <sinch-select-button
        slot="target"
        text={value}
        placeholder="Select color"
        aria-label="Open color select"
        style={buttonStyles}
        on-click={onOpen}
      >
        <sinch-color-swatch slot="icon" name={value}/>
      </sinch-select-button>
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
