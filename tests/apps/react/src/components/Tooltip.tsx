import type { FC } from 'react'

type TTooltip = {
  search: URLSearchParams,
}

export const Tooltip: FC<TTooltip> = ({ search }) => {
  const text: any = search.get('text')
  const isInverted = search.get('inverted') !== null
  const orientation: any = search.get('orientation')
  const width: any = search.get('width')

  return (
    <sinch-tooltip
      orientation={orientation}
      text={text}
      width={width}
      inverted={isInverted}
    >
      <span>Some content</span>
    </sinch-tooltip>
  )
}
