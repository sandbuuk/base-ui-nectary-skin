import type { FC } from 'react'
import './styles.css'

export const NavigationList: FC = ({ children }) => (
  <ul className="navigation-list">
    {children}
  </ul>
)
