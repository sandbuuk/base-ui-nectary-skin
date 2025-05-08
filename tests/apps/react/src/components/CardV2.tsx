import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/assets/illustrations/cat-texting'
import '@nectary/components/button'
import '@nectary/components/link'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/text'

export const CardV2: FC = () => {
  const [search] = useComponentSearchParams('card-v2')
  const content: any = search.get('content')
  const title: any = search.get('title')
  const hasIllustration = search.get('illustration') !== null
  const hasIcon = search.get('icon') !== null
  const buttonText = search.get('button')
  const linkText = search.get('link')
  const background: any = search.get('bg')
  const disabled: any = search.get('disabled') !== null
  const clickable: any = search.get('clickable') !== null
  const selected: any = search.get('selected') !== null

  return (
    <sinch-card-v2 selected={selected} disabled={disabled} {...((Boolean(clickable)) && { 'on-click': () => console.log('click') })}>
      {hasIllustration && (
        <sinch-illustration-cat-texting
          size={290}
          valign="top"
          slot="media"
          background={background}
        />
      )}
      <sinch-card-v2-title slot="title" text={title} ellipsis>
        {hasIcon && <sinch-icon-branded-chatbot slot="icon"/>}
      </sinch-card-v2-title>
      <sinch-text slot="content" type="m">{content}</sinch-text>
      {buttonText !== null && (
        <sinch-button
          slot="footer"
          type="primary"
          text={buttonText}
          aria-label="Button"
          onClick={() => {}}
        />
      )}
      {linkText !== null && (
        <sinch-link
          slot="footer"
          href="#"
          standalone
          preventDefault
          text={linkText}
          aria-label="Link"
        />
      )}
    </sinch-card-v2>
  )
}
