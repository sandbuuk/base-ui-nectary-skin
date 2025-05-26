import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "EventHandlers" */'./index.mdx'))

export const EventHandlersPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
