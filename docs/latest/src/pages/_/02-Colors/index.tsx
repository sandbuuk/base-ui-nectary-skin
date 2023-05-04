import './styles.css'
import '@sinch-engage/nectary/grid-item'
import './illustrations/pallete-overview-main-colors'
import './illustrations/pallete-overview-complementary-colors'
import './illustrations/token-explanation'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/icons/open-in-new'
import { MDXProvider } from '@mdx-js/react'
import { commonMdxComponents } from 'docs-common'
import MainDocumentMarkDown from './markdown/MainDocument.mdx'

const ColorsPage = () => {
  return (
    <MDXProvider components={commonMdxComponents}>
      <div id="page-wrapper">
        <div id="page-layout-grid">
          <div className="page-layout-grid-item">
            <MainDocumentMarkDown/>
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default ColorsPage
