import './styles.css'
import { ThemeToggleButton } from '../ThemeToggleButton'
import { VersionSelect } from '../VersionSelect'

export const SidebarFooter = () => {
  return (
    <div id="sidebar-footer">
      <VersionSelect/>
      <ThemeToggleButton/>
    </div>
  )
}
