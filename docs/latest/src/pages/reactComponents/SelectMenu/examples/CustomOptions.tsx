import { Select, Text } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'
import pokemons from '../../../components/SelectMenu/examples/pokemon.json'

const menuStyles: CSSProperties = {
  width: 250,
}

export const CustomOptionsExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Select
      rows={10}
      style={menuStyles}
      value={value}
      onChange={setValue}
      aria-label="Action menu"
      searchAutocomplete="on"
    >
      {Object.entries(pokemons).map(([name, { pokedex, types }]) => (
        <Select.Option
          key={pokedex}
          value={name}
          text={`${name} ${types.map(({ name }) => name).join(' ')}`}
          aria-label={name}
          customContent={(
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <img
                style={{ blockSize: '3rem', margin: '-0.25rem' }}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex}.png`}
                alt={name}
              />
              <div
                style={{ display: 'flex', flexFlow: 'column', gap: '0.25rem' }}
              >
                <Text type="s">{name}</Text>
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
                      <Text
                        style={{ color: 'white', fontWeight: 'bold' }}
                        type="xxs"
                      >
                        {name}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        />
      ))}
    </Select>
  )
}
