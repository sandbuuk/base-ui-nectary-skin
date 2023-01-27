import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/icons/open-in-new'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const TypeCtaPrimaryExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-primary"
      size="l"
      on-click={() => console.log('click')}
    >
      <sinch-icon-open-in-new slot="left-icon"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-primary"
      size="m"
      on-click={() => console.log('click')}
    >
      <sinch-icon-open-in-new slot="left-icon"/>
    </sinch-button>
    <sinch-button
      text="Click"
      aria-label="Click"
      type="cta-primary"
      size="s"
      on-click={() => console.log('click')}
    >
      <sinch-icon-open-in-new slot="left-icon"/>
    </sinch-button>
  </div>
)
