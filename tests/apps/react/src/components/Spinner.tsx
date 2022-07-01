import type { FC } from 'react'
import '@sinch-engage/nectary/spinner'

type TSpinner = {
  search: URLSearchParams,
}

export const Spinner: FC<TSpinner> = ({ search }) => {
  const type: any = search.get('type')

  return (
    <sinch-spinner
      type={type}
      static
    />
  )
}
