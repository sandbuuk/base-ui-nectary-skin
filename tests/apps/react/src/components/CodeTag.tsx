import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/code-tag'
import '@nectary/components/text'

export const CodeTag: FC = () => {
  const [search] = useComponentSearchParams('code-tag')
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
