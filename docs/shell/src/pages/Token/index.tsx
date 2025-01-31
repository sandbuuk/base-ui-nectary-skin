import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Tokens" */'./index.mdx'))

export const TokensPage: FC = () => (
  <SimpleLayout width="90%">
    <Component/>
  </SimpleLayout>
)
