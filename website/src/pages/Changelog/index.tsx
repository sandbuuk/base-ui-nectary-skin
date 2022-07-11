import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'
import './styles.css'

export const ChangelogPage: FC = () => {
  const Component = lazyScrollIntoView(() => import('@sinch-engage/nectary/changelog.md'))

  return (
    <div id="page-changelog">
      <Component/>
    </div>
  )
}
