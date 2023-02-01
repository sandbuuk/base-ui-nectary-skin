import { lazyScrollIntoView, SimpleLayout } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Intro" */'./index.md'))

export const IntroPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
