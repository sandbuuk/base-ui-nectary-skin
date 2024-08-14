import { useSearchParams } from 'react-router-dom'
import type { TSinchDialogCloseDetail } from '@nectary/components/dialog/types'
import type { FC } from 'react'
import '@nectary/components/dialog'
import '@nectary/components/text'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-face-smile-plus'

export const Dialog: FC = () => {
  const [search] = useSearchParams()
  const title: string = search.get('title') ?? ''
  const content = search.get('content')
  const buttons = search.get('buttons') !== null
  const icon = search.get('icon') !== null
  const onClose = (e: CustomEvent<TSinchDialogCloseDetail>) => {
    window.dispatchEvent(new CustomEvent('sinch-dialog-close', { detail: e.detail }))
  }

  return (
    <sinch-dialog
      open
      caption={title}
      aria-label={title}
      close-aria-label="Close dialog"
      on-close={onClose}
    >
      {icon && <sinch-icon-fa-face-smile-plus slot="icon"/>}
      {content !== null && <sinch-text slot="content" type="m">{content}</sinch-text>}
      {buttons && (
        <>
          <sinch-button text="Cancel" aria-label="Cancel" type="secondary" slot="buttons" onClick={() => {}}/>
          <sinch-button text="Ok" aria-label="Ok" type="primary" slot="buttons" onClick={() => {}}/>
        </>
      )}
    </sinch-dialog>
  )
}
