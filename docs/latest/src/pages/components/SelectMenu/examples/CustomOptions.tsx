import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/text'
import { useState } from 'react'
import pokemons from './pokemon.json'
import type { CSSProperties, FC } from 'react'

const menuStyles: CSSProperties = {
  width: 250,
}

export const CustomOptionsExample: FC = () => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
      rows={10}
      style={menuStyles}
      value={value}
      on-change={onChange}
      aria-label="Action menu"
      search-autocomplete="on"
    >
      {Object.entries(pokemons).map(([name, { pokedex, types }]) => (
        <sinch-select-menu-option
          key={pokedex}
          value={name}
          text={`${name} ${types.map(({ name }) => name).join(' ')}`}
          aria-label={name}
        >
          <div slot="content" style={{ display: 'flex', gap: '0.5rem' }}>
            <img
              style={{ blockSize: '3rem', margin: '-0.25rem' }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`}
              alt={name}
            />
            <div
              style={{ display: 'flex', flexFlow: 'column', gap: '0.25rem' }}
            >
              <sinch-text type="s">{name}</sinch-text>
              <div
                style={{ display: 'flex', flexFlow: 'wrap', gap: '0.125rem' }}
              >
                {types.map(({ name, color }) => (
                  <div
                    key={name}
                    style={{
                      padding: '0 0.5rem',
                      borderRadius: '0.25rem',
                      background: color,
                    }}
                  >
                    <sinch-text
                      style={{ color: 'white', fontWeight: 'bold' }}
                      type="xxs"
                    >
                      {name}
                    </sinch-text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </sinch-select-menu-option>
      ))}
    </sinch-select-menu>
  )
}
