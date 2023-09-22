import type { CSSProperties, FC } from 'react'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/mood'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const TypePrimaryExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-icon-button
      type="primary"
      size="l"
      aria-label="Smile button"
      on-click={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="primary"
      size="m"
      aria-label="Smile button"
      on-click={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="primary"
      size="s"
      aria-label="Smile button"
      on-climk={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="primary"
      size="xs"
      aria-label="Smile button"
      on-climk={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
  </div>
)
