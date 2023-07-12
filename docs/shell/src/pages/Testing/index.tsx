import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Testing" */'./index.md'))

export const TestingPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
