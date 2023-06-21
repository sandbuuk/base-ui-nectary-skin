import '@sinch-engage/nectary/emoji-picker'
import type { FC } from 'react'

type TEmojiPicker = {
  search: URLSearchParams,
}

export const EmojiPicker: FC<TEmojiPicker> = () => {
  const onChange = (e: CustomEvent<string>) => {
    window.dispatchEvent(new CustomEvent('sinch-emoji-picker-change', { detail: e.detail }))
  }

  return (
    <sinch-emoji-picker
      on-change={onChange}
    />
  )
}
