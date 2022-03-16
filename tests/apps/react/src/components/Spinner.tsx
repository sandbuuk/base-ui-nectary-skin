import type { FC } from 'react'

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
