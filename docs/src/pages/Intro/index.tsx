import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

export const IntroPage: FC = () => {
  const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Intro" */'./index.md'))

  return (
    <div id="page-intro">
      <Component/>
    </div>
  )
}
