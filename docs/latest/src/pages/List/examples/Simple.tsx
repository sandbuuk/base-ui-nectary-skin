import type { FC } from 'react'
import '@sinch-engage/nectary/list'
import '@sinch-engage/nectary/list-item'
import '@sinch-engage/nectary/text'

export const SimpleExample: FC = () => {
  return (
    <sinch-list>
      <sinch-list-item>
        <sinch-text slot="content" type="m">Lorem ipsum</sinch-text>
      </sinch-list-item>
      <sinch-list-item>
        <sinch-text slot="content" type="m">Lorem ipsum</sinch-text>
      </sinch-list-item>
      <sinch-list-item>
        <sinch-text slot="content" type="m">Lorem ipsum</sinch-text>
      </sinch-list-item>
    </sinch-list>
  )
}
