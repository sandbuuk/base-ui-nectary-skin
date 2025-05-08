import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/title'

export const Title: FC = () => {
  const [search] = useComponentSearchParams('title')
  const text = search.get('text') ?? ''
  const type: any = search.get('type')
  const level: any = search.get('level')

  return (
    <sinch-title
      text={text}
      type={type}
      level={level}
    />
  )
}
