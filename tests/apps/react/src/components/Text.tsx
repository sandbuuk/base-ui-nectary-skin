import type { FC } from 'react'
import '@sinch-engage/nectary/text'

type TText = {
  search: URLSearchParams,
}

export const Text: FC<TText> = ({ search }) => {
  const text = search.get('text') ?? ''
  const type: any = search.get('type')
  const isInline = search.get('inline') !== null
  const isEmphasized = search.get('emphasized') !== null

  return (
    <div id="wrapper">
      <span>prefix</span>
      <sinch-text
        text={text}
        type={type}
        inline={isInline}
        emphasized={isEmphasized}
      />
      <span>postfix</span>
    </div>
  )
}
