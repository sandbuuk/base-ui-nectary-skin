import type { FC } from 'react'
import '@nectary/assets/icons/fa-face-smile'

export const StyleExample: FC = () => {
  return (
    <>
      <sinch-icon-fa-face-smile style={{ '--sinch-global-size-icon': '16px', '--sinch-global-color-icon': ' var(--sinch-ref-color-raspberry-400)' }}/>
      <sinch-icon-fa-face-smile style={{ '--sinch-global-size-icon': '20px', '--sinch-global-color-icon': 'var(--sinch-ref-color-pumpkin-400)' }}/>
      <sinch-icon-fa-face-smile style={{ '--sinch-global-size-icon': '24px', '--sinch-global-color-icon': 'var(--sinch-ref-color-honey-300)' }}/>
      <sinch-icon-fa-face-smile style={{ '--sinch-global-size-icon': '48px', '--sinch-global-color-icon': 'var(--sinch-ref-color-grass-400)' }}/>
      <sinch-icon-fa-face-smile style={{ '--sinch-global-size-icon': '96px', '--sinch-global-color-icon': 'var(--sinch-ref-color-ocean-400)' }}/>
      <sinch-icon-fa-face-smile style={{ '--sinch-global-size-icon': '120px', '--sinch-global-color-icon': 'var(--sinch-ref-color-candy-800)' }}/>
    </>
  )
}
