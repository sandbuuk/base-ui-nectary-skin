import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/spinner'
import '@nectary/components/icon'

export const Button: FC<{ searchPrefix?: string }> = ({ searchPrefix = 'button' }) => {
  const [search] = useComponentSearchParams(searchPrefix)
  const isDisabled = search.get('disabled') != null
  const isToggled = search.get('toggled') != null
  const hasRightIcon = search.get('icon-right') != null
  const hasIcon = search.get('icon') != null
  const hasSpinner = search.get('spinner') != null
  const text: any = search.get('text') ?? undefined
  const type: any = search.get('type') ?? undefined
  const size: any = search.get('size') ?? undefined
  const formType: any = search.get('form-type') ?? undefined
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
      form-type={formType}
    >
      {hasSpinner && <sinch-spinner slot="icon"/>}
      {hasIcon && <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>}
      {hasRightIcon && <sinch-icon icons-version="2" name="fa-angle-down" slot="right-icon"/>}
    </sinch-button>
  )
}
