import { useCallback, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

type TSegment = {
  search: URLSearchParams,
}

export const Segment: FC<TSegment> = ({ search }) => {
  const caption: string = search.get('caption') ?? ''
  const hasContent = search.get('content') !== null
  const hasAction = search.get('action') !== null
  const hasIcon = search.get('icon') !== null
  const hasInfo = search.get('info') !== null
  const hasCollapse = search.get('collapse') !== null
  const [isCollapsed, setCollapsed] = useState(false)
  const onCollapse = useCallback((e: SyntheticEvent<Element, CustomEvent>) => {
    const value = e.nativeEvent.detail

    setCollapsed(value)
    window.dispatchEvent(new CustomEvent('sinch-segment-collapse-change', { detail: value }))
  }, [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-segment-collapse-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-segment-collapse-blur')), [])

  return (
    <sinch-segment
      caption={caption}
      collapsed={isCollapsed}
    >
      {hasCollapse && (
        <sinch-segment-collapse
          slot="collapse"
          aria-label="Collapse"
          value={isCollapsed}
          onChange={onCollapse}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {hasContent && (
        <div slot="content" style={{ display: 'flex', flexDirection: 'column' }}>
          <section style={{ marginBottom: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
          <sinch-input aria-label="Input" label="Label" value="" onChange={() => {}} slot="content"/>
          <sinch-input aria-label="Input" label="Label" value="" onChange={() => {}} slot="content"/>
        </div>
      )}
      {hasIcon && <sinch-icon-chatbot size={32} slot="icon"/>}
      {hasInfo && <sinch-tag text="Label" slot="info"/>}
      {hasInfo && (
        <sinch-icon-button
          small
          aria-label="Icon Button"
          onClick={() => {}}
          slot="info"
        >
          <sinch-icon-apps slot="icon"/>
        </sinch-icon-button>
      )}
      {hasAction && (
        <>
          <sinch-checkbox aria-label="Checkbox" checked={false} onChange={() => {}} text="Checkbox" slot="action"/>
          <sinch-button small text="Cancel" aria-label="Cancel" type="secondary" slot="action" onClick={() => {}}/>
          <sinch-button small text="Ok" aria-label="Ok" type="primary" slot="action" onClick={() => {}}/>
        </>
      )}
    </sinch-segment>
  )
}
