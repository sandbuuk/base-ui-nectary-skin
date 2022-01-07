import type { FC } from 'react'

type TButton = {
  search: URLSearchParams
}

export const Button: FC<TButton> = ({ search }) => {
  const isDisabled = search.get('disabled') != null
  const isSmall = search.get('small') != null
  const hasIcon = search.get('icon') != null
  const hasSpinner = search.get('spinner') != null
  const text: any = search.get('text') ?? undefined
  const type: any = search.get('type') ?? undefined

  return (
    <sinch-button
      type={type}
      text={text}
      disabled={isDisabled}
      small={isSmall}
      onClick={() => {}}
    >
      {hasIcon && <sinch-icon-share></sinch-icon-share>}
      {hasSpinner && <sinch-spinner static></sinch-spinner>}
    </sinch-button>
  )
}
