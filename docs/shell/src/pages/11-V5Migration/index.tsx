import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "V5Migration" */'./index.md'))

export const V5MigrationPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
