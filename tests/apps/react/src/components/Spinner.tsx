import type { FC } from 'react'
import '@nectary/components/spinner'

type TSpinner = {
  search: URLSearchParams,
}

export const Spinner: FC<TSpinner> = ({ search }) => {
  const size: any = search.get('size')

  return (
    <sinch-spinner
      size={size}
    />
  )
}
