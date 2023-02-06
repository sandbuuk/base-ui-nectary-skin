import type { FC } from 'react'
import '@sinch-engage/nectary/list'
import '@sinch-engage/nectary/list-item'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'
import '@sinch-engage/nectary-assets/icons/add'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/text'

type TList = {
  search: URLSearchParams,
}

export const List: FC<TList> = () => {
  const content = (
    <div
      slot="content"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <sinch-icon-branded-chatbot/>
      <sinch-text style={{ flex: 1 }} type="m" inline>Replace me</sinch-text>
      <sinch-icon-button aria-label="Add" size="s" onClick={() => {}}>
        <sinch-icon-add slot="icon"/>
      </sinch-icon-button>
    </div>
  )

  return (
    <sinch-list>
      <sinch-list-item>
        {content}
      </sinch-list-item>
      <sinch-list-item>
        {content}
      </sinch-list-item>
      <sinch-list-item>
        {content}
      </sinch-list-item>
      <sinch-list-item>
        {content}
      </sinch-list-item>
    </sinch-list>
  )
}
