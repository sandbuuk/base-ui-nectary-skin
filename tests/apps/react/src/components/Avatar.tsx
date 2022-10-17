import type { FC } from 'react'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/avatar-status'

type TAvatar = {
  search: URLSearchParams,
}

export const Avatar: FC<TAvatar> = ({ search }) => {
  const alt = search.get('alt') ?? ''
  const src = search.get('src') ?? undefined
  const background: any = search.get('bg') ?? undefined
  const size: any = search.get('size') ?? undefined
  const statusColor: any = search.get('status')
  const hasBadge = search.get('badge') !== null

  if (hasBadge) {
    return (
      <sinch-badge text="8" size={size} mode="circle">
        <sinch-avatar
          src={src}
          alt={alt}
          size={size}
          background={background}
        >
          {statusColor !== null && <sinch-avatar-status slot="status" color={statusColor}/>}
        </sinch-avatar>
      </sinch-badge>
    )
  }

  return (
    <sinch-avatar
      src={src}
      alt={alt}
      size={size}
      background={background}
    >
      {statusColor !== null && <sinch-avatar-status slot="status" color={statusColor}/>}
    </sinch-avatar>
  )
}
