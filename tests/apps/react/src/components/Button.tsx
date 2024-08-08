import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-arrow-up-right-from-square'
import '@nectary/assets/icons/fa-angle-down'
import '@nectary/components/spinner'

export const Button: FC = () => {
  const [search] = useSearchParams()
  const isDisabled = search.get('disabled') != null
  const isToggled = search.get('toggled') != null
  const hasRightIcon = search.get('icon-right') != null
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
      toggled={isToggled}
      on-click={onClick}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Button"
    >
      {hasSpinner && <sinch-spinner slot="icon" />}
      {hasIcon && <sinch-icon-fa-arrow-up-right-from-square slot="icon" />}
      {hasRightIcon && <sinch-icon-fa-angle-down slot="right-icon" />}
    </sinch-button>
  )
}
