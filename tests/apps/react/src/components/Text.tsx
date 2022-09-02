import type { FC } from 'react'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'

type TText = {
  search: URLSearchParams,
}

export const Text: FC<TText> = ({ search }) => {
  const text = search.get('text') ?? ''
  const type: any = search.get('type')
  const isInline = search.get('inline') !== null
  const isEmphasized = search.get('emphasized') !== null

  return (
    <sinch-text type="m">
      <span>prefix </span>
      <sinch-text
        type={type}
        inline={isInline}
        emphasized={isEmphasized}
      >
        {text}
        {' '}
        <sinch-link href="#" text="Link" aria-label="Link"/>
      </sinch-text>
      <span> postfix</span>
    </sinch-text>
  )
}
