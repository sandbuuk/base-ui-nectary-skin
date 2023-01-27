import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/mood'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const TypeSecondaryExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-icon-button
      type="secondary"
      size="l"
      aria-label="Smile button"
      on-click={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="secondary"
      size="m"
      aria-label="Smile button"
      on-click={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="secondary"
      size="s"
      aria-label="Smile button"
      on-climk={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="secondary"
      size="xs"
      aria-label="Smile button"
      on-climk={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
  </div>
)
