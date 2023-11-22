import type { CSSProperties, FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const TypeCtaSecondaryExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-secondary"
      size="l"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-secondary"
      size="m"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-secondary"
      size="s"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-secondary"
      size="xs"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="cta-secondary"
      size="l"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="cta-secondary"
      size="m"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="cta-secondary"
      size="s"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
    <sinch-button
      aria-label="Click"
      type="cta-secondary"
      size="xs"
      on-click={() => console.log('click')}
    >
      <sinch-icon name="open_in_new" slot="icon"/>
    </sinch-button>
  </div>
)
