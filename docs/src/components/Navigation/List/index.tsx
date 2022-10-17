import type { FC, PropsWithChildren } from 'react'
import './styles.css'

export const NavigationList: FC<PropsWithChildren> = ({ children }) => (
  <ul className="navigation-list">
    {children}
  </ul>
)
