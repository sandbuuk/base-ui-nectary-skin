import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'
import './styles.css'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Changelog" */'@sinch-engage/nectary/changelog.md'))

export const ChangelogPage: FC = () => (
  <div id="page-changelog">
    <Component/>
  </div>
)
