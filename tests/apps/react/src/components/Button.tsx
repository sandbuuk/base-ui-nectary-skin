import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/open-in-new'
import '@nectary/assets/icons/expand-more'
import '@nectary/components/spinner'

export const Button: FC = () => {
  const [search] = useSearchParams()
  const isDisabled = search.get('disabled') != null
  const hasLeftIcon = search.get('icon-left') != null
  const hasIcon = search.get('icon') != null
  const hasSpinner = search.get('spinner') != null
  const text: any = search.get('text') ?? undefined
  const type: any = search.get('type') ?? undefined
  const size: any = search.get('size') ?? undefined
  const onClick = () => window.dispatchEvent(new CustomEvent('sinch-button-click'))
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-button-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-button-blur'))

  return (
    <sinch-button
      type={type}
      text={text}
      size={size}
      disabled={isDisabled}
      on-click={onClick}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Button"
    >
      {hasSpinner && <sinch-spinner slot="icon"/>}
      {hasLeftIcon && <sinch-icon-open-in-new slot="left-icon"/>}
      {hasIcon && <sinch-icon-expand-more slot="icon"/>}
    </sinch-button>
  )
}
