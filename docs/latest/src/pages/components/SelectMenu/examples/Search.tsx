import { useState } from 'react'
import pokemons from './pokemon.json'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'

const menuStyles: CSSProperties = {
  width: 250,
}

export const SearchExample: FC = () => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
      aria-label="Action menu"
      rows={5}
      style={menuStyles}
      value={value}
      on-change={onChange}
    >
      {
        Object.keys(pokemons).map((pokemon) => (
          <sinch-select-menu-option
            key={pokemon}
            value={pokemon}
            text={pokemon}
            aria-label={pokemon}
          />
        ))
      }
    </sinch-select-menu>
  )
}
