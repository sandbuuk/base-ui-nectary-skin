import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

export const PalettePage: FC = lazyScrollIntoView(
  () => import(/* webpackChunkName: "Palette" */ './index.mdx')
)
