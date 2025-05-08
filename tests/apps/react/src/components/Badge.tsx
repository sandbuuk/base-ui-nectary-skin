import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/badge'
import '@nectary/components/button'
import '@nectary/components/icon'

export const Badge: FC = () => {
  const [search] = useComponentSearchParams('badge')
  const text = search.get('text') ?? ''
  const size: any = search.get('size')
  const mode: any = search.get('mode')
  const isHidden = search.get('hidden') !== null

  return (
    <sinch-button aria-label="Button">
      <sinch-badge
        slot="icon"
        text={text}
        size={size}
        mode={mode}
        hidden={isHidden}
      >
        <sinch-icon icons-version="2" name="fa-bell"/>
      </sinch-badge>
    </sinch-button>
  )
}
