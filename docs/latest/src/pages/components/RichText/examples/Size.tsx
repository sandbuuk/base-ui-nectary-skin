import type { CSSProperties, FC } from 'react'
import '@nectary/components/rich-text'

const mdText = (size: string) => `__Rich Text__ \`size\` property value _"${size}"_`

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const SizeExample: FC = () => (
  <div style={wrapperStyle}>
    <sinch-rich-text size="m" text={mdText('m')}/>
    <sinch-rich-text size="s" text={mdText('s')}/>
    <sinch-rich-text size="xs" text={mdText('xs')}/>
    <sinch-rich-text size="xxs" text={mdText('xss')}/>
  </div>
)
