import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/segment'
import '@nectary/components/segment-collapse'
import '@nectary/components/tag'
import '@nectary/components/button'
import '@nectary/components/text'
import '@nectary/assets/icons/apps'
import '@nectary/assets/icons-branded/chatbot'

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
      <sinch-button slot="info" aria-label="Options">
        <sinch-icon-apps slot="icon"/>
      </sinch-button>
      <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</sinch-text>
      <sinch-button slot="action" text="Cancel" type="secondary" aria-label="Cancel"/>
      <sinch-button slot="action" text="Ok" type="primary" aria-label="Ok"/>
    </sinch-segment>
  )
}
