import { useState } from 'react'
import pokemonSections from './pokemon-sectioned.json'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/title'

const selectStyles: CSSProperties = {
  width: 300,
}

export const SectionExample: FC = () => {
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
        search-placeholder="Search Pokemon"
      >
        {
        Object.entries(pokemonSections).map(([pokemonType, pokemons]) => (
          <>
            <sinch-title level="3" type="m" text={pokemonType}/>
            {pokemons.map((pokemon) => (
              <sinch-select-menu-option
                key={pokemon}
                value={pokemon}
                text={pokemon}
                aria-label={pokemon}
              />
            ))}
          </>

        ))
      }
      </sinch-select-menu>
    </sinch-popover>
  )
}
