import type { FC } from 'react'
import '@nectary/components/text'

export const TypeExample: FC = () => {
  return (
    <div>
      <sinch-text type="xxs">Lorem ipsum dolor sit amet consectetur adipisicing elit</sinch-text>
      <sinch-text type="xs">Lorem ipsum dolor sit amet consectetur adipisicing elit</sinch-text>
      <sinch-text type="s">Lorem ipsum dolor sit amet consectetur adipisicing elit</sinch-text>
      <sinch-text type="m">Lorem ipsum dolor sit amet consectetur adipisicing elit</sinch-text>
    </div>
  )
}
