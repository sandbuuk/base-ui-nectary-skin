import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Assets" */'./index.md'))

export const AssetsPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
