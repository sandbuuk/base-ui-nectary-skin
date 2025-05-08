import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/card'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/components/button'
import '@nectary/components/link'

export const Card: FC = () => {
  const [search] = useComponentSearchParams('card')
  const text: any = search.get('text')
  const label: any = search.get('label')
  const header: any = search.get('header')
  const hasIllustration = search.get('illustration') !== null
  const hasIcon = search.get('icon') !== null
  const buttonText = search.get('button')
  const linkText = search.get('link')
  const background: any = search.get('bg')
  const isDraggable = search.get('draggable') !== null

  return (
    <sinch-card
      caption={header}
      text={text}
      label={label}
      draggable={isDraggable}
    >
      {hasIcon && <sinch-icon-branded-chatbot slot="icon"/>}
      {hasIllustration && <sinch-illustration-phone-and-cat size={290} valign="top" slot="illustration" background={background}/>}
      {buttonText !== null && (
        <sinch-button
          slot="action"
          type="primary"
          text={buttonText}
          aria-label="Button"
          onClick={() => {}}
        />
      )}
      {linkText !== null && (
        <sinch-link
          slot="action"
          href="#"
          standalone
          preventDefault
          text={linkText}
          aria-label="Link"
        />
      )}
    </sinch-card>
  )
}
