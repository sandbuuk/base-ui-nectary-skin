import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary/select-button'

type TColorSelect = {
  search: URLSearchParams,
}

export const ColorSelect: FC<TColorSelect> = ({ search }) => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-color-menu-change', { detail: value }))
    setValue(value)
    setOpen(false)
  }
  const onClick = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const isDisabled = search.get('disabled') != null
  const isInvalid = search.get('invalid') != null
  const colors = search.get('colors') ?? undefined
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const cols = (() => {
    const val = search.get('cols')

    return val !== null ? parseInt(val) : undefined
  })()

  return (
    <sinch-popover
      aria-label="Colors"
      open={isOpen}
      on-close={onClose}
      orientation="bottom-right"
      modal
    >
      <sinch-select-button
        slot="target"
        placeholder="Select color"
        aria-label="Select color"
        on-click={onClick}
        text={value}
        disabled={isDisabled}
        invalid={isInvalid}
      >
        <sinch-color-swatch slot="icon" name={value}/>
      </sinch-select-button>
      <sinch-color-menu
        slot="content"
        cols={cols}
        rows={rows}
        value={value}
        colors={colors}
        on-change={onChange}
        aria-label="Menu"
      />
    </sinch-popover>
  )
}
