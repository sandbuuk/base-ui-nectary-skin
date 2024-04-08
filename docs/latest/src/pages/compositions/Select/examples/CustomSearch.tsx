import { useState } from 'react'
import pokemonNames from './pokemon.json'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'

const selectStyles: CSSProperties = {
  width: 300,
}

const getDefaultDisplayedPokemon = () => pokemonNames.slice(0, 3)

export const CustomSearchExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const [displayedPokemon, setDisplayedPokemon] = useState(getDefaultDisplayedPokemon())

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    setIsOpen(false)
  }
  const onSearchChange = (e: CustomEvent<string>) => {
    e.preventDefault()

    const search = e.detail

    if (search !== '' && Boolean(search)) {
      const found = pokemonNames.filter((pokemonName) => pokemonName.toLowerCase().includes(search))

      return setDisplayedPokemon(found)
    }

    return setDisplayedPokemon(getDefaultDisplayedPokemon())
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
        on-search-change={onSearchChange}
        searchable
        search-placeholder="Search Pokemon"
      >
        {
        displayedPokemon.map((pokemon) => (
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
