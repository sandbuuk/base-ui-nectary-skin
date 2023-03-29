import { Link } from 'react-router-dom'
import '@sinch-engage/nectary/logo/sinch-icon'
import '@sinch-engage/nectary/title'
import { VersionSelect } from '../VersionSelect'
import './styles.css'

export const SidebarTitle = () => {
  return (
    <div className="sidebar-title">
      <Link to={'/'}>
        <sinch-logo-sinch-icon size={24}/>
      </Link>
      <div className="sidebar-title-version">
        <sinch-title
          class="sidebar-title-version-text"
          text="Nectary"
          type="m"
          level="3"
          ellipsis
        />
        <VersionSelect/>
      </div>
    </div>
  )
}
