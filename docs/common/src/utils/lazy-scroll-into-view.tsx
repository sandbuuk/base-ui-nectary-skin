import { lazy } from 'react'
import { withScrollIntoView } from '../hooks'
import type { FC, LazyExoticComponent } from 'react'

type TFactory = () => Promise<{ default: FC }>

export const lazyScrollIntoView = (factory: TFactory): LazyExoticComponent<FC> =>
  lazy(() => factory().then((c) => ({
    default: withScrollIntoView(c.default),
  })))
