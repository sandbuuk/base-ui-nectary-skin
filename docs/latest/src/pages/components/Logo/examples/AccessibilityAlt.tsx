import type { FC } from 'react'
import '@nectary/components/text'
import '@nectary/assets/logo/portal-build-icon'

export const AccessibilityAltExample: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      <div>
        <sinch-text type="m" style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'normal' }}>With custom alt text</sinch-text>
        <sinch-logo-portal-build-icon size={32} alt="Navigate to Build platform dashboard"/>
      </div>

    </div>
  )
}
