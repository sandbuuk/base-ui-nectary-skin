import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/toast'
import '@nectary/components/button'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/close'

const md = 'To set up the `LINE`, read and **accept** the `LINE` [terms & conditions](https://google.com).'

export const Toast: FC = () => {
  const [search] = useSearchParams()
  const isMarkdownExample = search.get('example') === 'md'
  const type: any = search.get('type') ?? undefined
  const text = isMarkdownExample
    ? md
    : search.get('text') ?? ''
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
