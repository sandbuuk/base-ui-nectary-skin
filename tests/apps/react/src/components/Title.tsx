import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/title'

export const Title: FC = () => {
  const [search] = useSearchParams()
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
