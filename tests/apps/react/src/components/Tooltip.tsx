import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { TSinchTooltipType } from '@nectary/components/tooltip/types'
import type { FC } from 'react'
import '@nectary/components/text'
import '@nectary/components/tooltip'

export const Tooltip: FC = () => {
  const [search] = useSearchParams()
  const text: any = search.get('text')
  const type = search.get('type') as TSinchTooltipType ?? undefined
  const orientation: any = search.get('orientation')
  const onTooltipShow = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-tooltip-show')), [])
  const onTooltipHide = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-tooltip-hide')), [])

  return (
    <sinch-tooltip
      orientation={orientation}
      text={text}
      type={type}
      on-show={onTooltipShow}
      on-hide={onTooltipHide}
    >
      <sinch-text id="example-content" type="m">Some content</sinch-text>
    </sinch-tooltip>
  )
}
