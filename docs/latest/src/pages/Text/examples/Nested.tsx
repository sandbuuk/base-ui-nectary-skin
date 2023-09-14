import type { FC } from 'react'
import '@nectary/components/text'

export const NestedExample: FC = () => {
  return (
    <sinch-text type="m">
      Lorem ipsum dolor <sinch-text type="m" inline emphasized>sit amet consectetur</sinch-text> adipisicing elit
    </sinch-text>
  )
}
