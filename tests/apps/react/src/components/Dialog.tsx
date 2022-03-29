import type { FC } from 'react'

type TDialog = {
  search: URLSearchParams,
}

export const Dialog: FC<TDialog> = ({ search }) => {
  const title: string = search.get('title') ?? ''
  const content = search.get('content')
  const buttons = search.get('buttons') !== null

  return (
    <sinch-dialog
      title={title}
      aria-label={title}
      onClose={() => {
        window.dispatchEvent(new CustomEvent('sinch-dialog-close'))
      }}
    >
      {content !== null && <section slot="content">{content}</section>}
      {buttons && (
        <>
          <sinch-button text="Cancel" aria-label="Cancel" type="secondary" slot="buttons" onClick={() => {}}/>
          <sinch-button text="Ok" aria-label="Ok" type="primary" slot="buttons" onClick={() => {}}/>
        </>
      )
        }
    </sinch-dialog>
  )
}
