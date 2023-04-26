import { useCallback } from 'react'
import type { TSinchTooltipType } from '@sinch-engage/nectary/tooltip/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/tooltip'

type TTooltip = {
  search: URLSearchParams,
}

export const Tooltip: FC<TTooltip> = ({ search }) => {
  const text: any = search.get('text')
  const isInverted = search.get('inverted') !== null
  const type = search.get('type') as TSinchTooltipType ?? undefined
  const orientation: any = search.get('orientation')
  const onTooltipShow = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-tooltip-show')), [])
  const onTooltipHide = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-tooltip-hide')), [])

  return (
    <sinch-tooltip
      orientation={orientation}
      text={text}
      type={type}
      inverted={isInverted}
      on-show={onTooltipShow}
      on-hide={onTooltipHide}
    >
      <sinch-text id="content" type="m">Some content</sinch-text>
    </sinch-tooltip>
  )
}
