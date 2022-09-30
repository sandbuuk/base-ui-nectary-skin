import type { FC } from 'react'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/icons/mood-bad'

type TChip = {
  search: URLSearchParams,
}

export const Chip: FC<TChip> = ({ search }) => {
  const color: any = search.get('color') ?? undefined
  const text = search.get('text') ?? ''
  const isSmall = search.get('small') != null
  const hasIcon = search.get('icon') != null
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
      {hasIcon && <sinch-icon-mood-bad slot="icon"/>}
    </sinch-chip>
  )
}
