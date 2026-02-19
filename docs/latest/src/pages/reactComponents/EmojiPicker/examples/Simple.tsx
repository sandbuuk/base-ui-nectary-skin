import { EmojiPicker } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => (
  <EmojiPicker
    aria-label="Emoji Picker"
    onChange={(emoji) => console.log(emoji)}
  />
)
