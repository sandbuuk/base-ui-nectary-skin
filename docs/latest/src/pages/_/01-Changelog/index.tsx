import Changelog from '@sinch-engage/nectary/changelog.md'
import '@sinch-engage/nectary/title'
import { SimpleLayout } from 'docs-common'
import './styles.css'
import type { FC } from 'react'

const ChangelogPage: FC = () => {
  return (
    <SimpleLayout>
      <div id="page-changelog">
        <div className="title no-anchor">
          <sinch-title type="xl" level="1" text="📦 Changelog"/>
        </div>
        <Changelog/>
      </div>
    </SimpleLayout>
  )
}

export default ChangelogPage
