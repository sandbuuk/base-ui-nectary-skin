import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "NotFound" */'./index.md'))

export const NotFoundPage: FC = () => {
  return (
    <div id="page-not-found">
      <Component/>
    </div>
  )
}
