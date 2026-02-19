import { Select } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'
import pokemons from '../../../components/SelectMenu/examples/pokemon.json'

const menuStyles: CSSProperties = {
  width: 250,
}

export const SearchExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Select
      aria-label="Action menu"
      rows={5}
      style={menuStyles}
      value={value}
      onChange={setValue}
    >
      {Object.keys(pokemons).map((pokemon) => (
        <Select.Option
          key={pokemon}
          value={pokemon}
          text={pokemon}
          aria-label={pokemon}
        />
      ))}
    </Select>
  )
}
