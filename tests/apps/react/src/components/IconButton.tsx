import { useCallback } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/help-outline'
import '@sinch-engage/nectary/spinner'

type TIconButton = {
  search: URLSearchParams,
}

export const IconButton: FC<TIconButton> = ({ search }) => {
  const isDisabled = search.get('disabled') != null
  const hasSpinner = search.get('spinner') != null
  const type: any = search.get('type') ?? undefined
  const size: any = search.get('size') ?? undefined
  const onClick = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-click')), [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-blur')), [])
  const onTooltipShow = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-tooltip-show')), [])
  const onTooltipHide = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-tooltip-hide')), [])

  return (
    <sinch-icon-button
      type={type}
      size={size}
      disabled={isDisabled}
      aria-label="Button"
      on-click={onClick}
      on-focus={onFocus}
      on-blur={onBlur}
      on-tooltip-show={onTooltipShow}
      on-tooltip-hide={onTooltipHide}
    >
      {
      hasSpinner
        ? <sinch-spinner slot="icon"/>
        : <sinch-icon-help-outline slot="icon"/>
      }
    </sinch-icon-button>
  )
}
