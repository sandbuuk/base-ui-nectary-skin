import type { FC } from 'react'
import '@nectary/components/inline-alert'

export const DeprecationWarning: FC = () => {
  return (
    <div style={{ marginBottom: 24 }}>
      <sinch-inline-alert type="warn" caption="Careful!" text="This component is marked as deprecated and might be removed in the future."/>
    </div>
  )
}
