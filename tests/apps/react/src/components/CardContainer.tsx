import type { FC } from 'react'

type TCardContainer = {
  search: URLSearchParams,
}

export const CardContainer: FC<TCardContainer> = () => {
  return (
    <sinch-card-container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F1F3F4',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150px',
          fontFamily: 'Gilroy',
        }}
      >
        <span style={{ fontSize: '24px' }}>Replace me!</span>
        <span style={{ fontSize: '16px' }}>Im a template component</span>
      </div>
    </sinch-card-container>
  )
}
