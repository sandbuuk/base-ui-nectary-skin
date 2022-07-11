import type { FC } from 'react'
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
        <span style={{ fontSize: '24px' }}>Replace me!</span>
        <span style={{ fontSize: '16px' }}>Im a template component</span>
      </div>
    </sinch-card-container>
  )
}
