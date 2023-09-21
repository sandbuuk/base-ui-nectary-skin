import type { FC } from 'react'
import '@nectary/components/list'
import '@nectary/components/list-item'
import '@nectary/components/text'

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
