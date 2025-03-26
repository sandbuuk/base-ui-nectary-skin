import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "V3Migration" */'./index.md'))

export const V3MigrationPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
