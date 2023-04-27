import '@sinch-engage/nectary/button'
import './styles.css'
import { ThemeToggleButton } from '../ThemeToggleButton'

export const SidebarFooter = () => {
  return (
    <div id="sidebar-footer">
      <sinch-button type="tertiary" text="Docs Settings" aria-label="Docs settings"/>
      <ThemeToggleButton/>
    </div>
  )
}
