import { Button, Select } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'
import pokemons from '../../../components/SelectMenu/examples/pokemon.json'

const menuStyles: CSSProperties = {
  width: 250,
}

export const CustomSearchExample: FC = () => {
  const [value, setValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Select
        aria-label="Action menu"
        rows={5}
        style={menuStyles}
        value={value}
        searchable
        onChange={setValue}
        onSearchChange={setSearchValue}
        searchValue={searchValue}
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
      <Button
        variant="cta-primary"
        aria-label="Clear Search"
        onClick={() => setSearchValue('')}
      >
        Custom Clear Search
      </Button>
    </>
  )
}
