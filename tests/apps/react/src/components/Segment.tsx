import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/segment'
import '@sinch-engage/nectary/segment-collapse'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/apps'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/checkbox'

type TSegment = {
  search: URLSearchParams,
}

export const Segment: FC<TSegment> = ({ search }) => {
  const caption: string = search.get('caption') ?? ''
  const hasContent = search.get('content') !== null
  const hasAction = search.get('action') !== null
  const hasIcon = search.get('icon') !== null
  const hasInfo = search.get('info') !== null
  const hasPreview = search.get('preview') !== null
  const hasCollapse = search.get('collapse') !== null
  const [isCollapsed, setCollapsed] = useState(false)
  const onCollapse = (e: CustomEvent<boolean>) => {
    const value = e.detail

    setCollapsed(value)
    window.dispatchEvent(new CustomEvent('sinch-segment-collapse-change', { detail: value }))
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-segment-collapse-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-segment-collapse-blur'))

  return (
    <sinch-segment
      style={{ flex: 1, minHeight: 0 }}
      caption={caption}
      collapsed={isCollapsed}
    >
      {hasCollapse && (
        <sinch-segment-collapse
          slot="collapse"
          aria-label="Collapse"
          value={isCollapsed}
          on-change={onCollapse}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {hasContent && (
        <div slot="content" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
          <sinch-field slot="content" label="Label">
            <sinch-input slot="input" aria-label="Input" value=""/>
          </sinch-field>
          <sinch-field slot="content" label="Label">
            <sinch-input slot="input" aria-label="Input" value=""/>
          </sinch-field>
        </div>
      )}
      {hasIcon && <sinch-icon-branded-chatbot size={32} slot="icon"/>}
      {hasInfo && <sinch-tag text="Label" slot="info"/>}
      {hasInfo && (
        <sinch-icon-button
          size="s"
          aria-label="Icon Button"
          onClick={() => {}}
          slot="info"
        >
          <sinch-icon-apps slot="icon"/>
        </sinch-icon-button>
      )}
      {hasPreview && (
        <div
          slot="preview"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F1F3F4',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <span style={{ fontSize: '18px' }}>Replace me!</span>
          <span style={{ fontSize: '12px' }}>Im a template component</span>
        </div>
      )}
      {hasAction && (
        <>
          <sinch-checkbox aria-label="Checkbox" checked={false} onChange={() => {}} text="Checkbox" slot="action"/>
          <sinch-button size="s" text="Cancel" aria-label="Cancel" type="secondary" slot="action" onClick={() => {}}/>
          <sinch-button size="s" text="Ok" aria-label="Ok" type="primary" slot="action" onClick={() => {}}/>
        </>
      )}
    </sinch-segment>
  )
}
