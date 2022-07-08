import { lazy } from 'react'
import type { FC, LazyExoticComponent } from 'react'
import { withScrollIntoView } from '~/hooks/with-scroll-into-view'

export type TFactory = () => Promise<{ default: FC }>

export const lazyScrollIntoView = (factory: TFactory): LazyExoticComponent<FC> =>
  lazy(() => factory().then((c) => ({
    default: withScrollIntoView(c.default),
  })))
