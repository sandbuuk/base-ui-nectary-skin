import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/color-swatch'

export const ColorSwatch: FC = () => {
  const [search] = useSearchParams()
  const name: any = search.get('name') ?? undefined

  return (
    <sinch-color-swatch
      name={name}
    />
  )
}
