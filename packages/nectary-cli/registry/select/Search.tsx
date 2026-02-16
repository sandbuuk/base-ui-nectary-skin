import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'

const defaultSelectStyles: CSSProperties = {
  width: 300,
}

export interface SelectSearchProps {
  /** Options to display. */
  options?: string[]
  placeholder?: string
  searchPlaceholder?: string
  /** Controlled value */
  value?: string
  /** Callback when selection changes */
  onChange?: (value: string) => void
  style?: CSSProperties
  ariaLabel?: string
}

export const SelectSearch: FC<SelectSearchProps> = ({
  options = [],
  placeholder = 'Select option',
  searchPlaceholder = 'Search',
  value: controlledValue,
  onChange,
  style = defaultSelectStyles,
  ariaLabel = 'Select',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState('')
  const value = controlledValue ?? internalValue
  const setValue = onChange != null ? (v: string) => { onChange(v); setInternalValue(v) } : setInternalValue

  const onSelectChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    setIsOpen(false)
  }
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  return (
    <sinch-popover
      open={isOpen}
      aria-label={ariaLabel}
      orientation="bottom"
      modal
      on-close={onClose}
    >
      <sinch-select-button
        slot="target"
        text={value}
        placeholder={placeholder}
        aria-label={`Open ${ariaLabel}`}
        style={style}
        on-click={onOpen}
      />
      <sinch-select-menu
        slot="content"
        aria-label={`${ariaLabel} menu`}
        rows={3}
        value={value}
        on-change={onSelectChange}
        search-placeholder={searchPlaceholder}
      >
        {options.map((option) => (
          <sinch-select-menu-option
            key={option}
            value={option}
            text={option}
            aria-label={option}
          />
        ))}
      </sinch-select-menu>
    </sinch-popover>
  )
}
