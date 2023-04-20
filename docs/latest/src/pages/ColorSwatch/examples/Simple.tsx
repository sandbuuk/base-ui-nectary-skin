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
  width: 300,
}

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const skinToneColors = ['skin-tone-default', 'skin-tone-light', 'skin-tone-light-medium', 'skin-tone-medium', 'skin-tone-medium-dark', 'skin-tone-dark']
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
