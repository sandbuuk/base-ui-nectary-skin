import type { CSSProperties, FC } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-body'
import '@nectary/components/table-row'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-cell'
import '@nectary/components/color-swatch'
import '@nectary/components/text'

const tableStyles: CSSProperties = {
  width: 300,
}

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const skinToneColors = ['skintone-default', 'skintone-light', 'skintone-light-medium', 'skintone-medium', 'skintone-medium-dark', 'skintone-dark']
const allColors = [
  ...lightColors,
  ...darkColors,
  ...vibrantColors,
  ...skinToneColors,
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
        allColors.map((name) => (
          <sinch-table-row key={name}>
            <sinch-table-cell align="center">
              <sinch-color-swatch name={name}/>
            </sinch-table-cell>
            <sinch-table-cell align="center">
              <sinch-text type="m">{name}</sinch-text>
            </sinch-table-cell>
          </sinch-table-row>
        ))
      }
    </sinch-table-body>
  </sinch-table>
)
