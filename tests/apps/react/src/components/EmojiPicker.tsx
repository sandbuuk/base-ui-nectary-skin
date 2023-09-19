import '@nectary/components/emoji-picker'
import type { FC } from 'react'

export const EmojiPicker: FC = () => {
  const onChange = (e: CustomEvent<string>) => {
    window.dispatchEvent(new CustomEvent('sinch-emoji-picker-change', { detail: e.detail }))
  }

  return (
    <sinch-emoji-picker
      on-change={onChange}
    />
  )
}
