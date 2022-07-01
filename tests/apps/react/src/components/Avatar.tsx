import type { FC } from 'react'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/avatar-badge'
import '@sinch-engage/nectary/avatar-status'

type TAvatar = {
  search: URLSearchParams,
}

export const Avatar: FC<TAvatar> = ({ search }) => {
  const alt = search.get('alt') ?? ''
  const src = search.get('src') ?? undefined
  const background: any = search.get('bg') ?? undefined
  const size: any = search.get('size') ?? undefined
  const badgeText = search.get('badge')
  const statusColor: any = search.get('status')

  return (
    <sinch-avatar
      src={src}
      alt={alt}
      size={size}
      background={background}
    >
      {badgeText !== null && <sinch-avatar-badge slot="badge" text={badgeText}/>}
      {statusColor !== null && <sinch-avatar-status slot="status" color={statusColor}/>}
    </sinch-avatar>
  )
}
