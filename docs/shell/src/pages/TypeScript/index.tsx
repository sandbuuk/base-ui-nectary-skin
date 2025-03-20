import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "TypeScript" */'./index.md'))

export const TypeScriptPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
