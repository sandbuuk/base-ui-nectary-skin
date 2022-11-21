import type { FC } from 'react'
import '@sinch-engage/nectary/toast'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

type TToast = {
  search: URLSearchParams,
}

export const Toast: FC<TToast> = ({ search }) => {
  const type: any = search.get('type') ?? undefined
  const text = search.get('text') ?? ''
  const hasClose = search.get('close') != null
  const hasAction = search.get('action') != null

  const onCloseFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-close-focus'))
  }
  const onCloseBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-close-blur'))
  }
  const onCloseClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-close-click'))
  }
  const onButtonFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-button-focus'))
  }
  const onButtonBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-button-blur'))
  }
  const onButtonClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-toast-button-click'))
  }

  return (
    <sinch-toast
      type={type}
      text={text}
    >
      {hasClose && (
        <sinch-icon-button
          slot="close"
          size="s"
          aria-label="close"
          on-click={onCloseClick}
          on-focus={onCloseFocus}
          on-blur={onCloseBlur}
        >
          <sinch-icon-close slot="icon"/>
        </sinch-icon-button>
      )}
      {hasAction && (
        <sinch-button
          slot="action"
          type="cta-secondary"
          size="s"
          text="Retry"
          aria-label="Retry"
          on-click={onButtonClick}
          on-focus={onButtonFocus}
          on-blur={onButtonBlur}
        />
      )}
    </sinch-toast>
  )
}
