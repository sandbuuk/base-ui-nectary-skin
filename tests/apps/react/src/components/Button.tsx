import { useCallback } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/icons/expand-more'
import '@sinch-engage/nectary/spinner'

type TButton = {
  search: URLSearchParams,
}

export const Button: FC<TButton> = ({ search }) => {
  const isDisabled = search.get('disabled') != null
  const isSmall = search.get('small') != null
  const hasLeftIcon = search.get('icon-left') != null
  const hasRightIcon = search.get('icon-right') != null
  const hasSpinner = search.get('spinner') != null
  const text: any = search.get('text')
  const type: any = search.get('type')
  const onClick = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-button-click')), [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-button-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-button-blur')), [])

  return (
    <sinch-button
      type={type}
      text={text}
      disabled={isDisabled}
      small={isSmall}
      onClick={onClick}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label={text ?? 'Button'}
    >
      {hasLeftIcon && <sinch-icon-open-in-new slot="left-icon"/>}
      {hasRightIcon && <sinch-icon-expand-more slot="right-icon"/>}
      {hasSpinner && <sinch-spinner static type={isSmall ? 'small' : 'medium'} slot="left-icon"/>}
    </sinch-button>
  )
}
