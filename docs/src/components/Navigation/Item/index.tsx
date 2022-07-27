import { Link } from 'react-router-dom'
import type { FC } from 'react'
import './styles.css'

export type TNavigationItem = {
  path: string,
  text: string,
}

export const NavigationItem: FC<TNavigationItem> = ({ path, text, children }) => (
  <li className="navigation-item">
    <Link className="navigation-link" to={`/?path=${path}`}>
      {text}
    </Link>
    {children}
  </li>
)
