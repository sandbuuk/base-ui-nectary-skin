import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

export const IntroPage: FC = lazyScrollIntoView(() => import('./index.mdx'))
