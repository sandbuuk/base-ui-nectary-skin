import { useCallback } from 'react'
import type { FC } from 'react'

type TAlert = {
  search: URLSearchParams,
}

export const Alert: FC<TAlert> = ({ search }) => {
  const type: any = search.get('type') ?? undefined
  const text: any = search.get('text') ?? undefined
  const title = search.get('title') ?? undefined
  const actionText = search.get('action') ?? undefined
  const isDismissable = search.get('dismissable') != null
  const isMultiline = search.get('multiline') != null

  const onCloseFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-focus'))
  }, [])
  const onCloseBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-blur'))
  }, [])
  const onCloseClick = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-click'))
  }, [])
  const onButtonFocus = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-focus'))
  }, [])
  const onButtonBlur = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-blur'))
  }, [])
  const onButtonClick = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-click'))
  }, [])

  return (
    <sinch-alert
      type={type}
      text={text}
      title={title}
      multiline={isMultiline}
    >
      {isDismissable && (
        <sinch-alert-close
          slot="close"
          onFocus={onCloseFocus}
          onBlur={onCloseBlur}
          onClick={onCloseClick}
        />
      )}
      {actionText != null && (
        <sinch-alert-button
          slot="button"
          text={actionText}
          onFocus={onButtonFocus}
          onBlur={onButtonBlur}
          onClick={onButtonClick}
        />
      )}
    </sinch-alert>
  )
}
