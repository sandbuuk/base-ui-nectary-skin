import type { CSSProperties, FC } from 'react'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/mood'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const TypeTertiaryExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-icon-button
      type="tertiary"
      size="l"
      aria-label="Smile button"
      on-click={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="tertiary"
      size="m"
      aria-label="Smile button"
      on-click={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="tertiary"
      size="s"
      aria-label="Smile button"
      on-climk={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
    <sinch-icon-button
      type="tertiary"
      size="xs"
      aria-label="Smile button"
      on-climk={() => console.log('click')}
    >
      <sinch-icon-mood slot="icon"/>
    </sinch-icon-button>
  </div>
)
