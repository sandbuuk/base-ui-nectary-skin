import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

export const FAQPage: FC = () => {
  const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "FAQ" */'./index.mdx'))

  return (
    <div id="faq">
      <Component/>
    </div>
  )
}
