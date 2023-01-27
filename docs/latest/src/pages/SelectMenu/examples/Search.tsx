import { useState } from 'react'
import pokemonNames from './pokemon.json'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'

const menuStyles: CSSProperties = {
  width: 250,
}

export const SearchExample: FC = () => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
      slot="content"
      aria-label="Action menu"
      rows={5}
      style={menuStyles}
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
  )
}
