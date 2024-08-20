import type { FC } from 'react'
import '@nectary/components/icon'

export const StyleExample: FC = () => {
  return (
    <>
      <sinch-icon name="fa-face-smile" style={{ '--sinch-global-size-icon': '10px', '--sinch-global-color-icon': ' var(--sinch-ref-color-raspberry-400)' }}/>
      <sinch-icon name="fa-face-smile" style={{ '--sinch-global-size-icon': '20px', '--sinch-global-color-icon': 'var(--sinch-ref-color-pumpkin-400)' }}/>
      <sinch-icon name="fa-face-smile" style={{ '--sinch-global-size-icon': '30px', '--sinch-global-color-icon': 'var(--sinch-ref-color-honey-300)' }}/>
      <sinch-icon name="fa-face-smile" style={{ '--sinch-global-size-icon': '50px', '--sinch-global-color-icon': 'var(--sinch-ref-color-grass-400)' }}/>
      <sinch-icon name="fa-face-smile" style={{ '--sinch-global-size-icon': '80px', '--sinch-global-color-icon': 'var(--sinch-ref-color-ocean-400)' }}/>
      <sinch-icon name="fa-face-smile" style={{ '--sinch-global-size-icon': '130px', '--sinch-global-color-icon': 'var(--sinch-ref-color-candy-800)' }}/>
    </>
  )
}
