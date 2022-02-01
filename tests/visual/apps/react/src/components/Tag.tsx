import { FC } from 'react'

type TTag = {
  search: URLSearchParams
}

export const Tag: FC<TTag> = ({ search }) => {
  const category: any = search.get('category') ?? undefined
  const text = search.get('text') ?? ''
  const isDismissable = search.get('dismissable') != null
  const isSmall = search.get('small') != null
  const isInverted = search.get('inverted') != null
  const hasIcon = search.get('icon') != null

  return (
    <sinch-tag
      category={category}
      text={text}
      small={isSmall}
      inverted={isInverted}
    >
      {hasIcon && <sinch-icon-share size={12} slot="icon"></sinch-icon-share>}
      {isDismissable && <sinch-tag-close small={isSmall} slot="close"></sinch-tag-close>}
    </sinch-tag>
  )
}
