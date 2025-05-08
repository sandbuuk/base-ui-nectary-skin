import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/tag'
import '@nectary/components/icon'

export const Tag: FC = () => {
  const [search] = useComponentSearchParams('tag')
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
      {hasIcon && <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>}
    </sinch-tag>
  )
}
