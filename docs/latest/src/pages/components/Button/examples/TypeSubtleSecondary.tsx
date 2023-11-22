import type { CSSProperties, FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const TypeSubtleSecondaryExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="subtle-secondary"
      size="l"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="subtle-secondary"
      size="m"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="subtle-secondary"
      size="s"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="subtle-secondary"
      size="xs"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="subtle-secondary"
      size="l"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="subtle-secondary"
      size="m"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="subtle-secondary"
      size="s"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="subtle-secondary"
      size="xs"
      on-click={() => console.log('click')}
    >
      <sinch-icon slot="icon" name="open_in_new"/>
    </sinch-button>
  </div>
)
