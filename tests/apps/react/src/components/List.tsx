import type { FC } from 'react'
import '@nectary/components/list'
import '@nectary/components/list-item'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/components/text'
import '@nectary/components/button'
import '@nectary/components/icon'

export const List: FC = () => {
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
      <sinch-button aria-label="Add" size="s" onClick={() => { }}>
        <sinch-icon name="fa-plus" slot="icon"/>
      </sinch-button>
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
