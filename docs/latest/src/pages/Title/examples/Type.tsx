import type { FC } from 'react'
import '@nectary/components/title'

export const TypeExample: FC = () => {
  return (
    <div>
      <sinch-title type="xs" level="5" text="Lorem ipsum dolor"/>
      <sinch-title type="s" level="4" text="Lorem ipsum dolor"/>
      <sinch-title type="m" level="3" text="Lorem ipsum dolor"/>
      <sinch-title type="l" level="2" text="Lorem ipsum dolor"/>
      <sinch-title type="xl" level="1" text="Lorem ipsum dolor"/>
    </div>
  )
}
