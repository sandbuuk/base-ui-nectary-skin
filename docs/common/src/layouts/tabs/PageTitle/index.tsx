import { createPortal } from 'react-dom'
import { usePortalTitle } from '../context'
import type { FC } from 'react'
import '@sinch-engage/nectary/title'

type TPageTitle = {
  text: string,
}

export const PageTitle: FC<TPageTitle> = ({ text }) => {
  const $el = usePortalTitle()

  if ($el === null) {
    return null
  }

  return createPortal(
    <sinch-title type="xl" level="1" text={text}/>,
    $el
  )
}
