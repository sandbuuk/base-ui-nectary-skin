import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/text'
import '@nectary/components/link'
import '@nectary/components/code-tag'

export const Text: FC = () => {
  const [search] = useComponentSearchParams('text')
  const text = search.get('text') ?? ''
  const type: any = search.get('type')
  const isInline = search.get('inline') !== null
  const isEmphasized = search.get('emphasized') !== null
  const isEllipsis = search.get('ellipsis') !== null

  return (
    <sinch-text type="m" ellipsis={isEllipsis}>
      <span>prefix </span>
      <sinch-text
        type={type}
        inline={isInline}
        emphasized={isEmphasized}
      >
        {text}
        {' '}
        <sinch-link href="#" text="Link" aria-label="Link"/>
        {' '}
        <sinch-code-tag text="Code"/>
      </sinch-text>
      <span> postfix</span>
    </sinch-text>
  )
}
