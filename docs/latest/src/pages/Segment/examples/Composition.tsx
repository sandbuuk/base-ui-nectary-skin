import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/segment'
import '@sinch-engage/nectary/segment-collapse'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/apps'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'

const previewStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}

export const CompositionExample: FC = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  const onChange = (e: CustomEvent<boolean>) => {
    setCollapsed(e.detail)
  }

  return (
    <sinch-segment
      caption="Segment"
      aria-label="Segment"
      collapsed={isCollapsed}
    >
      <sinch-segment-collapse
        slot="collapse"
        value={isCollapsed}
        on-change={onChange}
        aria-label="Collapse"
      />
      <sinch-icon-branded-chatbot slot="icon"/>
      <div slot="preview" style={previewStyle}>
        <sinch-text type="m">Lorem ipsum</sinch-text>
      </div>
      <sinch-tag slot="info" text="Label"/>
      <sinch-icon-button slot="info" aria-label="Options">
        <sinch-icon-apps slot="icon"/>
      </sinch-icon-button>
      <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</sinch-text>
      <sinch-button slot="action" text="Cancel" type="secondary" aria-label="Cancel"/>
      <sinch-button slot="action" text="Ok" type="primary" aria-label="Ok"/>
    </sinch-segment>
  )
}
