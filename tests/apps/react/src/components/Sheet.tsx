import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { TSinchSheetCloseDetail } from '@nectary/components/sheet/types'
import type { FC } from 'react'
import '@nectary/components/sheet'
import '@nectary/components/sheet-title'
import '@nectary/components/text'
import '@nectary/components/button'
import '@nectary/components/icon'

export const Sheet: FC = () => {
  const [search] = useComponentSearchParams('sheet')
  const title = search.get('title') ?? ''
  const desc = search.get('desc') ?? ''
  const content = search.get('content')
  const buttons = search.get('buttons') !== null
  const icon = search.get('icon') !== null
  const placement = (search.get('placement') as 'left' | 'right' | 'top' | 'bottom') ?? 'right'
  const overlay = (search.get('overlay') as 'modal' | 'push') ?? 'modal'

  const onClose = (e: CustomEvent<TSinchSheetCloseDetail>) => {
    window.dispatchEvent(new CustomEvent('sinch-sheet-close', { detail: e.detail }))
  }

  return (
    <sinch-sheet
      open
      placement={placement}
      overlay={overlay}
      on-close={onClose}
    >
      <sinch-sheet-title
        slot="title"
        title={title}
        description={desc}
        close-aria-label="Close Sheet"
      >
        {icon && <sinch-icon icons-version="2" name="fa-face-smile-plus" slot="icon"/>}
      </sinch-sheet-title>
      {content !== null && (
        <div slot="content">
          <sinch-text type="m">{content}</sinch-text>
        </div>
      )}
      {buttons && (
        <>
          <sinch-button text="Cancel" aria-label="Cancel" type="secondary" slot="footer" onClick={() => {}}/>
          <sinch-button text="Ok" aria-label="Ok" type="primary" slot="footer" onClick={() => {}}/>
        </>
      )}
    </sinch-sheet>
  )
}
