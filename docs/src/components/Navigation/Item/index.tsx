import { Link, useLocation } from 'react-router-dom'
import type { FC, PropsWithChildren } from 'react'
import './styles.css'

export type TNavigationItem = PropsWithChildren & {
  path: string,
  text: string,
}

export const NavigationItem: FC<TNavigationItem> = ({ path, text, children }) => {
  const location = useLocation()
  const activeClass = location.pathname === path ? 'active' : ''

  return (
    <li className="navigation-item">
      <Link className={`navigation-link ${activeClass}`} to={`/?path=${path}`}>
        {text}
      </Link>
      {children}
    </li>
  )
}
