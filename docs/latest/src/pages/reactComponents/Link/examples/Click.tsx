import { Link } from '@nectary/react'
import type { FC } from 'react'

export const ClickExample: FC = () => (
  <Link
    text="Link"
    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    aria-label="Link"
    preventDefault
    onClick={() => console.log('click')}
  />
)
