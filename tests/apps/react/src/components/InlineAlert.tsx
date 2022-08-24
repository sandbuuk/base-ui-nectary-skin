import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

type TInlineAlert = {
  search: URLSearchParams,
}

export const InlineAlert: FC<TInlineAlert> = ({ search }) => {
  const type: any = search.get('type') ?? undefined
  const text = search.get('text') ?? ''
  const caption = search.get('caption') ?? ''
  const hasClose = search.get('close') != null
  const hasAction = search.get('action') != null

  const onCloseFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-focus'))
  }
  const onCloseBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-blur'))
  }
  const onCloseClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-click'))
  }
  const onButtonFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-focus'))
  }
  const onButtonBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-blur'))
  }
  const onButtonClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-click'))
  }

  return (
    <sinch-inline-alert
      type={type}
      text={text}
      caption={caption}
    >
      {hasClose && (
        <sinch-icon-button
          slot="close"
          small
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
          small
          text="This is a Button!"
          aria-label="Action"
          on-click={onButtonClick}
          on-focus={onButtonFocus}
          on-blur={onButtonBlur}
        />
      )}
    </sinch-inline-alert>
  )
}
