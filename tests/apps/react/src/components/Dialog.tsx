import type { TSinchDialogCloseDetail } from '@sinch-engage/nectary/dialog/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/dialog'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/button'

type TDialog = {
  search: URLSearchParams,
}

export const Dialog: FC<TDialog> = ({ search }) => {
  const title: string = search.get('title') ?? ''
  const content = search.get('content')
  const buttons = search.get('buttons') !== null
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
