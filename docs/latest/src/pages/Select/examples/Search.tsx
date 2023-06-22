import { useState } from 'react'
import pokemonNames from './pokemon.json'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'

const selectStyles: CSSProperties = {
  width: 200,
}

export const SearchExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    setIsOpen(false)
  }
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

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
        text={value}
        placeholder="Select option"
        aria-label="Open select"
        style={selectStyles}
        on-click={onOpen}
      />
      <sinch-select-menu
        slot="content"
        aria-label="Action menu"
        rows={3}
        value={value}
        on-change={onChange}
      >
        {
        pokemonNames.map((pokemon) => (
          <sinch-select-menu-option
            key={pokemon}
            value={pokemon}
            text={pokemon}
            aria-label={pokemon}
          />
        ))
      }
      </sinch-select-menu>
    </sinch-popover>
  )
}
