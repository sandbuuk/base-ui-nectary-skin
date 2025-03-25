import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Themes" */'./index.md'))

export const ThemesPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
