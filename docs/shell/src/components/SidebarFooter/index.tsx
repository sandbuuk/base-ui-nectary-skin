import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'
import './styles.css'

export const SidebarFooter = () => {
  return (
    <div id="sidebar-footer">
      <sinch-button type="tertiary" text="Docs Settings" aria-label="Docs settings"/>
      <sinch-icon-button id="toggle-theme-button" aria-label="Toggle dark theme">
        <sinch-icon slot="icon" name="nights_stay"/>
      </sinch-icon-button>
    </div>
  )
}
