import type { FC } from 'react'
import '@nectary/components/tag'
import '@nectary/assets/icons/open-in-new'

type TTag = {
  search: URLSearchParams,
}

export const Tag: FC<TTag> = ({ search }) => {
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
      {hasIcon && <sinch-icon-open-in-new slot="icon"/>}
    </sinch-tag>
  )
}
