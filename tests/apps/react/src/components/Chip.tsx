import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/chip'
import '@nectary/components/icon'

export const Chip: FC = () => {
  const [search] = useSearchParams()
  const color: any = search.get('color') ?? undefined
  const text = search.get('text') ?? ''
  const isSmall = search.get('small') != null
  const hasIcon = search.get('icon') != null
  const hasRightIcon = search.get('right-icon') != null
  const onClick = () => window.dispatchEvent(new CustomEvent('sinch-chip-click'))
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-chip-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-chip-blur'))

  return (
    <sinch-chip
      color={color}
      text={text}
      small={isSmall}
      aria-label="Chip"
      on-click={onClick}
      on-focus={onFocus}
      on-blur={onBlur}
    >
      {hasIcon && <sinch-icon name="fa-face-smile" slot="icon"/>}
      {hasRightIcon && <sinch-icon name="fa-plus" slot="right-icon"/>}
    </sinch-chip>
  )
}
