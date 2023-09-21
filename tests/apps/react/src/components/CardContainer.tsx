import type { FC } from 'react'
import '@nectary/components/title'
import '@nectary/components/text'
import '@nectary/components/card-container'

export const CardContainer: FC = () => {
  return (
    <sinch-card-container
      style={{ flex: 1, minHeight: 0 }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F1F3F4',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '150px',
          height: '100%',
        }}
      >
        <sinch-title type="l" level="2" text="Replace me!"/>
        <sinch-text type="m">Im a template component</sinch-text>
      </div>
    </sinch-card-container>
  )
}
