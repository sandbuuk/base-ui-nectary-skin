import { lazyScrollIntoView } from 'docs-common'

const ComplementaryColorsMarkDown = lazyScrollIntoView(() => import(/* webpackChunkName: "Colors" */'../markdown/ComplementaryColors.md'))

export const ComplementaryColors = () => (
  <div id="small-grid">
    <div id="small-grid-left-grid-item">
      <ComplementaryColorsMarkDown/>
    </div>
    <div id="small-grid-right-grid-item">
      <illustration-pallete-overview-complementary-colors valign="center" size={198}/>
    </div>
  </div>
)

