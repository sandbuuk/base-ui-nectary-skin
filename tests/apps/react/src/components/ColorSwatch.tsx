import type { FC } from 'react'
import '@sinch-engage/nectary/color-swatch'

type TColorSwatch = {
  search: URLSearchParams,
}

export const ColorSwatch: FC<TColorSwatch> = ({ search }) => {
  const name: any = search.get('name') ?? undefined

  return (
    <sinch-color-swatch
      name={name}
    />
  )
}
