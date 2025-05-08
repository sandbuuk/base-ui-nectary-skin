import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/color-swatch'

export const ColorSwatch: FC = () => {
  const [search] = useComponentSearchParams('color-swatch')
  const name: any = search.get('name') ?? undefined

  return (
    <sinch-color-swatch
      name={name}
    />
  )
}
