import { useCallback } from 'react'
import type { FC } from 'react'

type TButton = {
  search: URLSearchParams,
}

export const Button: FC<TButton> = ({ search }) => {
  const isDisabled = search.get('disabled') != null
  const isSmall = search.get('small') != null
  const hasIcon = search.get('icon') != null
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
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={text ?? 'Button'}
    >
      {hasIcon && <sinch-icon-open-in-new slot="icon"/>}
      {hasSpinner && <sinch-spinner static type={isSmall ? 'small' : 'medium'} slot="icon"/>}
    </sinch-button>
  )
}
