import { Link } from 'react-router-dom'
import type { FC } from 'react'
import './styles.css'
import '@nectary/components/text'
import { useNavigateLink } from '~/hooks'

export type TNavigationItem = {
  path: string,
  text: string,
}

export const NavigationItem: FC<TNavigationItem> = ({ path, text }) => {
  const { to, isActive } = useNavigateLink(path)
  const activeClass = isActive === true ? 'selected' : ''

  return (
    <li className="navigation-item">
      <Link className={`navigation-link ${activeClass}`} to={to}>
        <sinch-text type="m">{text}</sinch-text>
      </Link>
    </li>
  )
}
