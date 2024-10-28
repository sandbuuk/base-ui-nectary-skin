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

export const SectionCustomSearchExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const [displayedPokemon, setDisplayedPokemon] = useState<Record<string, string[]>>(pokemonSections)

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
    setIsOpen(false)
  }
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  const onSearchChange = (e: CustomEvent<string>) => {
    e.preventDefault()

    const search = e.detail

    if (search !== '' && Boolean(search)) {
      const found = Object.fromEntries(Object.entries(pokemonSections).map((section) => {
        const [sectionName, pokemons] = section

        return [sectionName, pokemons.filter((pokemon) => pokemon.toLowerCase().includes(search.toLowerCase()))]
      }))

      return setDisplayedPokemon(found)
    }

    return setDisplayedPokemon(pokemonSections)
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
        on-search-change={onSearchChange}
        searchable
      >
        {
          Object.entries(displayedPokemon).map(([pokemonType, pokemons]) => ((pokemons.length > 0) ? (
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
          ) : null))
        }
      </sinch-select-menu>
    </sinch-popover>
  )
}
