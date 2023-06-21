import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "FAQ" */'./index.mdx'))

export const FAQPage: FC = () => (
  <SimpleLayout>
    <Component/>
  </SimpleLayout>
)
