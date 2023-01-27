import Changelog from '@sinch-engage/nectary/changelog.md'
import '@sinch-engage/nectary/title'
import type { FC } from 'react'
import './styles.css'

const ChangelogPage: FC = () => (
  <div id="page-changelog">
    <div className="title no-anchor">
      <sinch-title type="xl" level="1" text="Changelog"/>
    </div>
    <Changelog/>
  </div>
)

export default ChangelogPage
