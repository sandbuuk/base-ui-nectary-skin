import type { FC } from 'react'
import '@sinch-engage/nectary/alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

type TAlert = {
  search: URLSearchParams,
}

export const Alert: FC<TAlert> = ({ search }) => {
  const type: any = search.get('type') ?? undefined
  const text = search.get('text') ?? ''
  const hasAction = search.get('action') !== null
  const hasClose = search.get('close') !== null

  const onCloseFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-focus'))
  }
  const onCloseBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-blur'))
  }
  const onCloseClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-click'))
  }
  const onButtonFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-focus'))
  }
  const onButtonBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-blur'))
  }
  const onButtonClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-click'))
  }

  return (
    <sinch-alert
      type={type}
      text={text}
    >
      {hasAction && (
        <sinch-button
          slot="action"
          type="cta-secondary"
          size="s"
          text="This is a Button!"
          aria-label="Action"
          on-click={onButtonClick}
          on-focus={onButtonFocus}
          on-blur={onButtonBlur}
        />
      )}
      {hasClose && (
        <sinch-icon-button
          slot="close"
          size="s"
          aria-label="Close"
          on-click={onCloseClick}
          on-focus={onCloseFocus}
          on-blur={onCloseBlur}
        >
          <sinch-icon-close slot="icon"/>
        </sinch-icon-button>
      )}
    </sinch-alert>
  )
}
