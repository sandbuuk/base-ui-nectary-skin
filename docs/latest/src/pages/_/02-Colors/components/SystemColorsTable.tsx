import SystemColorsTableMarkDown from '../markdown/SystemColorsTable.md'
import { SpacingY } from './SpacingY'
import colors from './colorsSystem.json'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary-assets/icons/expand-more'
import '@sinch-engage/nectary-assets/icons/expand-less'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'

const headStyle = {
  maxWidth: 105,
}

const tableStyle = {
  width: '100%',
  borderRadius: 14,
  backgroundColor: 'var(--sinch-sys-color-container-contrast-secondary-default)',
}

export const SystemColorsTable = () => {
  return (
    <>
      <div className="colors-table">
        <SystemColorsTableMarkDown/>
        <SpacingY height={28}/>
        <sinch-table style={tableStyle}>
          <sinch-table-head>
            <sinch-table-row>
              <sinch-table-head-cell style={headStyle} text="Sample" align="center" fit/>
              <sinch-table-head-cell text="Token name"/>
              <sinch-table-head-cell text="CSS Name"/>
              <sinch-table-head-cell text="Token reference"/>
              <sinch-table-head-cell text="Token value"/>
            </sinch-table-row>
          </sinch-table-head>
          <sinch-table-body>
            {colors.map(({ cssName, tokenName, tokenRefName, tokenRefValue }) => {
              return (
                <sinch-table-row key={cssName}>
                  <sinch-table-cell>
                    <div
                      className="color-circle"
                      style={{ backgroundColor: `var(${cssName})` }}
                    />
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{tokenName}</sinch-text>
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{cssName}</sinch-text>
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{tokenRefName}</sinch-text>
                  </sinch-table-cell>
                  <sinch-table-cell>
                    <sinch-text type="m">{tokenRefValue}</sinch-text>
                  </sinch-table-cell>
                </sinch-table-row>
              )
            })}
          </sinch-table-body>
        </sinch-table>
      </div>
      <SpacingY height={56}/>
    </>
  )
}
