import { FC } from 'react'

type TAlert = {
  search: URLSearchParams
}

export const Alert: FC<TAlert> = ({ search }) => {
  const type: any = search.get('type') ?? undefined
  const text: any = search.get('text') ?? undefined
  const title = search.get('title') ?? undefined
  const actionText = search.get('action') ?? undefined
  const isDismissable = search.get('dismissable') != null
  const isMultiline = search.get('multiline') != null

  return (
    <sinch-alert
      type={type}
      text={text}
      title={title}
      multiline={isMultiline}>
      {isDismissable && <sinch-alert-close slot="close"/>}
      {actionText != null && <sinch-alert-button slot="button" text={actionText}/>}
    </sinch-alert>
  )
}
