import { Emoji } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => (
  <Emoji
    char="😀"
    baseUrl="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/%s.svg"
  />
)
