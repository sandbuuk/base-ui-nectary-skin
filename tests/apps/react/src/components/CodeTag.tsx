import type { FC } from 'react'
import '@sinch-engage/nectary/code-tag'
import '@sinch-engage/nectary/text'

type TCodeTag = {
  search: URLSearchParams,
}

export const CodeTag: FC<TCodeTag> = ({ search }) => {
  const text = search.get('text') ?? ''
  const isEllipsis = search.get('ellipsis') !== null

  return (
    <div id="code-tag-wrapper" style={{ maxWidth: '100%' }}>
      <sinch-text type="m" ellipsis={isEllipsis}>
        <span>Lorem ipsum</span>
        {' '}
        <sinch-code-tag
          text={text}
        />
        {' '}
        <span>lorem ipsum</span>
      </sinch-text>
    </div>
  )
}
