import type { FC } from 'react'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/illustration/phone-and-cat'
import '@sinch-engage/nectary/card-button'
import '@sinch-engage/nectary/card-link'

type TCard = {
  search: URLSearchParams,
}

export const Card: FC<TCard> = ({ search }) => {
  const isDisabled = search.get('disabled') != null
  const text: any = search.get('text')
  const label: any = search.get('label')
  const header: any = search.get('header')
  const hasIllustration = search.get('illustration') !== null
  const hasIcon = search.get('icon') !== null
  const buttonText = search.get('button')
  const linkText = search.get('link')
  const background: any = search.get('bg')

  return (
    <sinch-card
      caption={header}
      text={text}
      label={label}
      disabled={isDisabled}
    >
      {hasIcon && <sinch-icon-branded-chatbot slot="icon"/>}
      {hasIllustration && <sinch-illustration-phone-and-cat size={290} valign="top" slot="illustration" background={background}/>}
      {buttonText !== null && <sinch-card-button slot="action" text={buttonText} aria-label="Button" onClick={() => {}}/>}
      {linkText !== null && <sinch-card-link slot="action" href="" text={linkText}/>}
    </sinch-card>
  )
}
