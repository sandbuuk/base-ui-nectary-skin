import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "FAQ" */'./index.mdx'))

export const FAQPage: FC = () => (
  <div id="faq">
    <Component/>
  </div>
)
