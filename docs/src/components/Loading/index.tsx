import '@sinch-engage/nectary/spinner'
import type { FC } from 'react'
import './styles.css'

export const Loading: FC = () => (
  <div className="loading">
    <sinch-spinner type="large"/>
  </div>
)
