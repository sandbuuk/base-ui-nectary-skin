import { RichText } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const mdText = (size: string) => `__Rich Text__ \`size\` property value _"${size}"_`

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const SizeExample: FC = () => (
  <div style={wrapperStyle}>
    <RichText size="m" text={mdText('m')}/>
    <RichText size="s" text={mdText('s')}/>
    <RichText size="xs" text={mdText('xs')}/>
    <RichText size="xxs" text={mdText('xxs')}/>
  </div>
)
