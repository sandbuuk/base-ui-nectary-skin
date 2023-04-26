import { lazyScrollIntoView } from 'docs-common'

const MainColorsMarkDown = lazyScrollIntoView(() => import(/* webpackChunkName: "Colors" */'../markdown/MainColors.md'))

export const MainColors = () =>
  (
    <div id="small-grid">
      <div id="small-grid-left-grid-item">
        <div style={{ height: '100%' }}>
          <MainColorsMarkDown/>
        </div>
      </div>
      <div id="small-grid-right-grid-item">
        <illustration-pallete-overview-main-colors valign="center" size={249}/>
      </div>
    </div>
  )
