import { useCallback } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/help-outline'
import '@sinch-engage/nectary/spinner'

type TIconButton = {
  search: URLSearchParams,
}

export const IconButton: FC<TIconButton> = ({ search }) => {
  const isDisabled = search.get('disabled') != null
  const hasSpinner = search.get('spinner') != null
  const onClick = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-click')), [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-icon-button-blur')), [])

  return (
    <sinch-icon-button
      disabled={isDisabled}
      on-click={onClick}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Button"
    >
      {!hasSpinner && <sinch-icon-help-outline slot="icon"/>}
      {hasSpinner && <sinch-spinner static type="medium" slot="icon"/>}
    </sinch-icon-button>
  )
}
