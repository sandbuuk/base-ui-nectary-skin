import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/progress'

export const Progress: FC = () => {
  const [search] = useSearchParams()
  const value = (() => {
    const val = search.get('value') ?? '0'
    const int = parseInt(val)

    return Number.isInteger(int) ? int : 0
  })()
  const isDetailed = search.get('detailed') !== null

  return (
    <sinch-progress
      value={value}
      detailed={isDetailed}
      aria-label="Progress"
    />
  )
}
