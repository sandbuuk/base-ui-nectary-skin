import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { useState } from 'react'
import type { TSinchColorName } from '@sinch-engage/nectary/utils/colors'
import type { FC } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary/color-menu'

export const IconButtonExample: FC = () => {
  const [value, setValue] = useState<TSinchColorName>(NO_COLOR)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onChange = (e: CustomEvent<TSinchColorName>) => {
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
        small
        on-click={onOpen}
      >
        <sinch-color-swatch slot="icon" name={value}/>
      </sinch-icon-button>
      <sinch-color-menu
        slot="content"
        value={value}
        aria-label="Color menu"
        on-change={onChange}
      />
    </sinch-popover>
  )
}
