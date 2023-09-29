import type { CSSProperties, FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/open-in-new'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}
const rowStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <div style={rowStyles}>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="primary"
        size="l"
        on-click={() => console.log('click')}
      >
        <sinch-icon-open-in-new slot="left-icon"/>
      </sinch-button>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="primary"
        size="m"
        on-click={() => console.log('click')}
      >
        <sinch-icon-open-in-new slot="left-icon"/>
      </sinch-button>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="primary"
        size="s"
        on-click={() => console.log('click')}
      >
        <sinch-icon-open-in-new slot="left-icon"/>
      </sinch-button>
    </div>
    <div style={rowStyles}>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="secondary"
        size="l"
        on-click={() => console.log('click')}
      >
        <sinch-icon-open-in-new slot="left-icon"/>
      </sinch-button>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="secondary"
        size="m"
        on-click={() => console.log('click')}
      >
        <sinch-icon-open-in-new slot="left-icon"/>
      </sinch-button>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="secondary"
        size="s"
        on-click={() => console.log('click')}
      >
        <sinch-icon-open-in-new slot="left-icon"/>
      </sinch-button>
    </div>
  </div>
)
