import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Intro" */'./index.mdx'))

export const TestingPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
