import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Intro" */'./index.md'))

export const ComponentsLibraryPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
