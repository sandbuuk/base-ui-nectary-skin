import type { FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary-assets/icons/notifications'

type TBadge = {
  search: URLSearchParams,
}

export const Badge: FC<TBadge> = ({ search }) => {
  const text = search.get('text') ?? ''
  const size: any = search.get('size')
  const mode: any = search.get('mode')
  const isHidden = search.get('hidden') !== null

  return (
    <sinch-icon-button aria-label="Button">
      <sinch-badge
        slot="icon"
        text={text}
        size={size}
        mode={mode}
        hidden={isHidden}
      >
        <sinch-icon-notifications/>
      </sinch-badge>
    </sinch-icon-button>
  )
}
