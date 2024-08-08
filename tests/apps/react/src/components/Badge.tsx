import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/badge'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-bell'

export const Badge: FC = () => {
  const [search] = useSearchParams()
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
        <sinch-icon-fa-bell/>
      </sinch-badge>
    </sinch-button>
  )
}
