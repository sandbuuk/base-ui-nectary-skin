import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

export const NotFoundPage: FC = () => {
  const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "NotFound" */'./index.mdx'))

  return (
    <div id="page-not-found">
      <Component/>
    </div>
  )
}
