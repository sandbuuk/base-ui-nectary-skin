import { lazyScrollIntoView, SimpleLayout } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Landing" */'./index.md'))

export const LandingPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
