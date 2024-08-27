import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/segment'
import '@nectary/components/segment-collapse'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/tag'
import '@nectary/assets/icons/apps'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/components/button'
import '@nectary/components/checkbox'
import '@nectary/components/text'

export const Segment: FC = () => {
  const [search] = useSearchParams()
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
          <sinch-text type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</sinch-text>
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
        <sinch-button
          size="s"
          aria-label="Icon Button"
          onClick={() => {}}
          slot="info"
        >
          <sinch-icon-apps slot="icon"/>
        </sinch-button>
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
          <sinch-text type="m">Replace me!</sinch-text>
          <sinch-text type="xs">Im a template component</sinch-text>
        </div>
      )}
      {hasAction && (
        <>
          <sinch-checkbox aria-label="Checkbox" checked={false} text="Checkbox" slot="action"/>
          <sinch-button size="s" text="Cancel" aria-label="Cancel" type="secondary" slot="action"/>
          <sinch-button size="s" text="Ok" aria-label="Ok" type="primary" slot="action"/>
        </>
      )}
    </sinch-segment>
  )
}
