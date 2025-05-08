import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/spinner'

export const Spinner: FC = () => {
  const [search] = useComponentSearchParams('spinner')
  const size: any = search.get('size')

  return (
    <sinch-spinner
      size={size}
    />
  )
}
