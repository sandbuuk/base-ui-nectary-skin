import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/spinner'

export const Spinner: FC = () => {
  const [search] = useSearchParams()
  const size: any = search.get('size')

  return (
    <sinch-spinner
      size={size}
    />
  )
}
