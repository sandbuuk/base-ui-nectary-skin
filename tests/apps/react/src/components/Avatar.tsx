import type { FC } from 'react'

type TAvatar = {
  search: URLSearchParams,
}

export const Avatar: FC<TAvatar> = ({ search }) => {
  const alt = search.get('alt') ?? ''
  const src = search.get('src') ?? undefined
  const background: any = search.get('bg') ?? undefined
  const size: any = search.get('size') ?? undefined

  return (
    <sinch-avatar
      src={src}
      alt={alt}
      size={size}
      background={background}
    />
  )
}
