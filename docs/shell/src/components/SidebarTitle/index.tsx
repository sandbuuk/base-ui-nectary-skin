import '@sinch-engage/nectary-assets/logo/sinch-icon'
import '@sinch-engage/nectary/title'
import { VersionSelect } from '../VersionSelect'
import './styles.css'

export const SidebarTitle = () => {
  return (
    <div className="sidebar-title">
      <sinch-logo-sinch-icon size={24}/>
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
