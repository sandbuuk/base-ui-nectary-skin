import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "GlobalComponents" */'./index.mdx'))

export const GlobalComponentsPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
