import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/color-swatch'
import '@nectary/components/select-button'
import '@nectary/components/popover'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const colors = [...lightColors, ...vibrantColors, ...darkColors]

export const ColorSelect: FC = () => {
  const [search] = useSearchParams()
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
        on-change={onChange}
        aria-label="Menu"
      >
        {colors.map((color) => (
          <sinch-color-menu-option key={color} value={color}/>
        ))}
      </sinch-color-menu>
    </sinch-popover>
  )
}
