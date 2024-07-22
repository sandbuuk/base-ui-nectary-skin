import { useState } from 'react'
import pokemonNames from './pokemon.json'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/button'

const menuStyles: CSSProperties = {
  width: 250,
}

export const CustomSearchExample: FC = () => {
  const [value, setValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <>
      <sinch-select-menu
        aria-label="Action menu"
        rows={5}
        style={menuStyles}
        value={value}
        searchable
        on-change={onChange}
        on-search-change={(e) => setSearchValue(e.detail)}
        search-value={searchValue}
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
      <sinch-button type="cta-primary" aria-label="Clear Search" text="Custom Clear Search" on-click={() => setSearchValue('')}/>
    </>
  )
}
