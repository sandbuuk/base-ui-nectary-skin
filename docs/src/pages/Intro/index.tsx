import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Intro" */'./index.md'))

export const IntroPage: FC = () => (
  <div id="page-intro">
    <Component/>
  </div>
)
