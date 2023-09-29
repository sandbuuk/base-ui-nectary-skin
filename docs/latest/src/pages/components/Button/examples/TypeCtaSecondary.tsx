import type { CSSProperties, FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/open-in-new'

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
      <sinch-icon-open-in-new slot="left-icon"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-secondary"
      size="m"
      on-click={() => console.log('click')}
    >
      <sinch-icon-open-in-new slot="left-icon"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-secondary"
      size="s"
      on-click={() => console.log('click')}
    >
      <sinch-icon-open-in-new slot="left-icon"/>
    </sinch-button>
  </div>
)
