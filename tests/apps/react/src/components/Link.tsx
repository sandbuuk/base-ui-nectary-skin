import { useCallback } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/link'

type TLink = {
  search: URLSearchParams,
}

export const Link: FC<TLink> = ({ search }) => {
  const text: any = search.get('text')
  const href: any = search.get('href')
  const isDisabled = search.get('disabled') != null
  const isExternal = search.get('external') != null
  const onClick = useCallback((e) => {
    e.nativeEvent.preventDefault()
    window.dispatchEvent(new CustomEvent('sinch-link-click'))
  }, [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-link-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-link-blur')), [])

  return (
    <div id="link-wrapper">
      <span>Line with</span>
      {' '}
      <sinch-link
        text={text}
        href={href}
        disabled={isDisabled}
        external={isExternal}
        onClick={onClick}
        on-focus={onFocus}
        on-blur={onBlur}
      />
      {' '}
      <span>navigation</span>
    </div>
  )
}
