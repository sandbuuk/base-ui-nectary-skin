import type { FC } from 'react'
import '@nectary/components/emoji-picker'

export const SimpleExample: FC = () => {
  const onEmojiChange = (e: CustomEvent<string>) => {
    console.log(e.detail)
  }

  return (
    <sinch-emoji-picker
      slot="content"
      aria-label="Emoji Picker"
      on-change={onEmojiChange}
    />
  )
}
