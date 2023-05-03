import { useCallback } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/text'

type TLink = {
  search: URLSearchParams,
}

export const Link: FC<TLink> = ({ search }) => {
  const text = search.get('text') ?? ''
  const href = search.get('href') ?? ''
  const isDisabled = search.get('disabled') !== null
  const isExternal = search.get('external') !== null
  const isStandalone = search.get('standalone') !== null
  const onClick = useCallback(() => {
    window.dispatchEvent(new CustomEvent('sinch-link-click'))
  }, [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-link-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-link-blur')), [])

  return (
    <sinch-text id="link-wrapper" type="m">
      <span>Line with</span>
      {' '}
      <sinch-link
        text={text}
        href={href}
        disabled={isDisabled}
        external={isExternal}
        standalone={isStandalone}
        preventDefault
        aria-label="Link"
        on-click={onClick}
        on-focus={onFocus}
        on-blur={onBlur}
      />
      {' '}
      <span>navigation</span>
    </sinch-text>
  )
}
