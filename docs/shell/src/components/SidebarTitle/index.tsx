import '@sinch-engage/nectary/logo/sinch-icon'
import '@sinch-engage/nectary/title'
import { Link } from 'react-router-dom'
import { VersionSelect } from '../VersionSelect'
import { useNavigateLink } from '~/hooks'
import './styles.css'

export const SidebarTitle = () => {
  const { to, isActive } = useNavigateLink('/')
  const activeClass = isActive === true ? 'selected' : ''

  return (
    <div className="sidebar-title">
      <Link className="sidebar-title-link" to={to}>
        <sinch-logo-sinch-icon size={24}/>
        <div className={`sidebar-title-version ${activeClass}`}>
          <sinch-title
            class="sidebar-title-version-text"
            text="Nectary"
            type="m"
            level="3"
            ellipsis
          />
          <VersionSelect/>
        </div>
      </Link>
    </div>
  )
}
