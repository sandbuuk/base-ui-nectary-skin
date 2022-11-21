import type { FC } from 'react'
import '@sinch-engage/nectary/list'
import '@sinch-engage/nectary/list-item'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/icons/add'
import '@sinch-engage/nectary/icon-button'

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
        font: 'var(--sinch-font-body)',
      }}
    >
      <sinch-icon-branded-chatbot/>
      <span style={{ flex: 1 }}>Replace me</span>
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
