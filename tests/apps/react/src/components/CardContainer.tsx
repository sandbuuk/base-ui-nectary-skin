import type { FC } from 'react'
import '@sinch-engage/nectary/title'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/card-container'

type TCardContainer = {
  search: URLSearchParams,
}

export const CardContainer: FC<TCardContainer> = () => {
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
