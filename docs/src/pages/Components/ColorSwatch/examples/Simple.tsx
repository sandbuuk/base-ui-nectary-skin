import {
  lightColorNames,
  darkColorNames,
  vibrantColorNames,
  skinToneColorNames,
} from '@sinch-engage/nectary/theme/colors'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary/text'

const tableStyles: CSSProperties = {
  width: 250,
}

const allColorNames: string[] = [
  ...lightColorNames.split(','),
  ...darkColorNames.split(','),
  ...vibrantColorNames.split(','),
  ...skinToneColorNames.split(','),
]

export const SimpleExample: FC = () => (
  <sinch-table style={tableStyles}>
    <sinch-table-head>
      <sinch-table-row>
        <sinch-table-head-cell align="center" text="Swatch"/>
        <sinch-table-head-cell align="center" text="Name"/>
      </sinch-table-row>
    </sinch-table-head>
    <sinch-table-body>
      {
        allColorNames.map((colorName) => (
          <sinch-table-row key={colorName}>
            <sinch-table-cell align="center">
              <sinch-color-swatch name={colorName}/>
            </sinch-table-cell>
            <sinch-table-cell align="center">
              <sinch-text type="m">{colorName}</sinch-text>
            </sinch-table-cell>
          </sinch-table-row>
        ))
      }
    </sinch-table-body>
  </sinch-table>
)
