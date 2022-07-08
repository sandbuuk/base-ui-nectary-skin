import { lazy } from 'react'
import type { FC, LazyExoticComponent } from 'react'
import { withScrollIntoView } from '~/hooks/with-scroll-into-view'

export const lazyScroll = (callback: () => Promise<{ default: FC }>): LazyExoticComponent<FC> => {
  return lazy(() => callback().then((c) => {
    return { default: withScrollIntoView(c.default) }
  }))
}
