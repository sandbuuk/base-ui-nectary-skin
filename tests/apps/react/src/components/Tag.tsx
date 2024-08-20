import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/tag'
import '@nectary/components/icon'

export const Tag: FC = () => {
  const [search] = useSearchParams()
  const color: any = search.get('color') ?? undefined
  const text = search.get('text') ?? ''
  const isSmall = search.get('small') != null
  const hasIcon = search.get('icon') != null

  return (
    <sinch-tag
      color={color}
      text={text}
      small={isSmall}
    >
      {hasIcon && <sinch-icon name="fa-arrow-up-right-from-square" slot="icon"/>}
    </sinch-tag>
  )
}
