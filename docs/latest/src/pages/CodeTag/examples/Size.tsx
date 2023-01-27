import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/code-tag'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const SizeExample: FC = () => (
  <div style={wrapperStyle}>
    <sinch-text type="m">
      The <sinch-code-tag text="font-size"/> value of <sinch-code-tag text="sinch-code-tag"/> is inherited
    </sinch-text>
    <sinch-text type="s">
      The <sinch-code-tag text="font-size"/> value of <sinch-code-tag text="sinch-code-tag"/> is inherited
    </sinch-text>
    <sinch-text type="xs">
      The <sinch-code-tag text="font-size"/> value of <sinch-code-tag text="sinch-code-tag"/> is inherited
    </sinch-text>
    <sinch-text type="xxs">
      The <sinch-code-tag text="font-size"/> value of <sinch-code-tag text="sinch-code-tag"/> is inherited
    </sinch-text>
  </div>
)
