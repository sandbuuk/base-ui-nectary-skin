import type { FC } from 'react'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/mood-bad'

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
      {hasIcon && <sinch-icon-mood-bad slot="icon"/>}
    </sinch-tag>
  )
}
