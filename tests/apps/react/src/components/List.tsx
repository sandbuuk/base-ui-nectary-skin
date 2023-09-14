import type { FC } from 'react'
import '@nectary/components/list'
import '@nectary/components/list-item'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/assets/icons/add'
import '@nectary/components/icon-button'
import '@nectary/components/text'

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
