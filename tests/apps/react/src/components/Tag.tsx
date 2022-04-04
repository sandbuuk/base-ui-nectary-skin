import { useCallback } from 'react'
import type { FC } from 'react'

type TTag = {
  search: URLSearchParams,
}

export const Tag: FC<TTag> = ({ search }) => {
  const category: any = search.get('category') ?? undefined
  const text = search.get('text') ?? ''
  const isDismissable = search.get('dismissable') != null
  const isSmall = search.get('small') != null
  const isInverted = search.get('inverted') != null
  const hasIcon = search.get('icon') != null
  const onClick = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-tag-close-click')), [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-tag-close-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-tag-close-blur')), [])

  return (
    <sinch-tag
      category={category}
      text={text}
      small={isSmall}
      inverted={isInverted}
    >
      {hasIcon && <sinch-icon-open-in-new slot="icon"/>}
      {isDismissable && (
        <sinch-tag-close
          slot="close"
          small={isSmall}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
    </sinch-tag>
  )
}
