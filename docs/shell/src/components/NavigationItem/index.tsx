import { Link } from 'react-router-dom'
import type { FC } from 'react'
import './styles.css'
import '@nectary/components/text'
import '@nectary/components/icon'
import { useNavigateLink } from '~/hooks'

export type TNavigationItem = {
  path: string,
  text: string,
}

export const NavigationItem: FC<TNavigationItem> = ({ path, text }) => {
  const { to, isActive } = useNavigateLink(path)
  const activeClass = isActive === true ? 'selected' : ''

  let isDeprecated = false
  let formattedText = `${text}`

  if (text.includes('(deprecated)')) {
    isDeprecated = true
    formattedText = formattedText.replace('(deprecated)', '')
  }

  return (
    <li className="navigation-item">
      <Link className={`navigation-link ${activeClass}`} to={to}>
        <sinch-text type="m" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{formattedText}
          {isDeprecated && <sinch-icon icons-version="2" name="trash-bin" style={{ '--sinch-global-size-icon': '16px', '--sinch-global-color-icon': 'var(--sinch-ref-color-honey-300)' }}/>}
        </sinch-text>
      </Link>
    </li>
  )
}
