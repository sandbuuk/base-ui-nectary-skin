import type { FC } from 'react'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/badge'

type TAvatar = {
  search: URLSearchParams,
}

export const Avatar: FC<TAvatar> = ({ search }) => {
  const alt = search.get('alt') ?? undefined
  const src = search.get('src') ?? undefined
  const color: any = search.get('color') ?? undefined
  const size: any = search.get('size') ?? undefined
  const status: any = search.get('status') ?? undefined
  const hasBadge = search.get('badge') !== null

  return (
    <sinch-badge text="8" size="m" mode="circle" hidden={!hasBadge}>
      <sinch-avatar
        src={src}
        alt={alt}
        size={size}
        color={color}
        status={status}
      />
    </sinch-badge>
  )
}
