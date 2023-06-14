import { useState } from 'react'
import { categories } from './SystemColorsTable'
import type { Category } from './SystemColorsTable'
import type { CSSProperties } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary-assets/icons/laptop'
import '@sinch-engage/nectary-assets/icons/smartphone'
import '@sinch-engage/nectary-assets/icons/tablet'
import '@sinch-engage/nectary-assets/icons/watch'

const selectStyles: CSSProperties = {
  width: 200,
}

type SelectColorCategoryInput = {
  handleSelectColorCategory: (value: Category) => void,
  category: Category,
}

export const SelectColorCategory = ({ handleSelectColorCategory, category }: SelectColorCategoryInput) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onChange = (e: CustomEvent<string>) => {
    onClose()
    handleSelectColorCategory(e.detail as Category)
  }

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Select"
      orientation="bottom"
      modal
      on-close={onClose}
    >
      <sinch-select-button
        slot="target"
        text={category}
        placeholder="Select option"
        aria-label="Open select"
        style={selectStyles}
        on-click={onOpen}
      />
      <sinch-select-menu
        slot="content"
        aria-label="Action menu"
        value={category}
        on-change={onChange}
      >
        {
          categories.map((category) => (
            <sinch-select-menu-option
              key={category}
              text={category}
              aria-label={`${category} option`}
              value={category}
            />
          ))
        }
      </sinch-select-menu>
    </sinch-popover>
  )
}
