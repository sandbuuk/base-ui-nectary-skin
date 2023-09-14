import type { FC } from 'react'
import '@nectary/components/title'

type TTitle = {
  search: URLSearchParams,
}

export const Title: FC<TTitle> = ({ search }) => {
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
